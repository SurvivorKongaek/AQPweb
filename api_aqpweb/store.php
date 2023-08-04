<?php
require("header.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbstore ออกมา
    $sql = $con->query("SELECT* FROM tbstore");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล

    $store_name = $data->store_name;
    $sql = $con->query("INSERT INTO tbstore (store_name)VALUES('$store_name')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $store_id = $data->store_id;
    $store_name = $data->store_name;
    $sql = $con->query("UPDATE tbstore SET store_name='$store_name' WHERE store_id='$store_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $store_id = $_GET["store_id"];
    $sql = $con->query("DELETE FROM tbstore WHERE store_id ='$store_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
