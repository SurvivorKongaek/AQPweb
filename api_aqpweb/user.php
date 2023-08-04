<?php
require("header.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbuser ออกมา
    $sql = $con->query("SELECT* FROM tbuser");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $username = $data->username;
    $password = $data->password;
    $posId = $data->posId;
    $status = $data->status;

    $sql = $con->query("INSERT INTO tbuser (username,password,posId,status)VALUES('$username','$password','$posId','$status')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $userId = $data->userId;
    $username = $data->username;
    $password = $data->password;
    $posId = $data->posId;
    $status = $data->status;
    $sql = $con->query("UPDATE tbuser SET username='$username', password='$password',
        posId='$posId',status='$status' WHERE userId='$userId'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $userId = $_GET["userId"];
    $sql = $con->query("DELETE FROM tbuser WHERE userId ='$userId '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
