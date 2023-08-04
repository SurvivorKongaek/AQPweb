<?php
require("header.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tb_member ออกมา
    $sql = $con->query("SELECT* FROM tbrawmaterial");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $rm_name = $data->rm_name;
    $rm_type = $data->rm_type;
    $rm_price = $data->rm_price;

    $sql = $con->query("INSERT INTO tbrawmaterial (rm_name,rm_type,rm_price)VALUES('$rm_name','$rm_type','$rm_price')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $rm_id = $data->rm_id;
    $rm_name = $data->rm_name;
    $rm_type = $data->rm_type;
    $rm_price = $data->rm_price;

    $sql = $con->query("UPDATE tbrawmaterial SET rm_name='$rm_name', rm_type='$rm_type',
            rm_price='$rm_price' WHERE rm_id='$rm_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $rm_id = $_GET["rm_id"];
    $sql = $con->query("DELETE FROM tbrawmaterial WHERE rm_id ='$rm_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
