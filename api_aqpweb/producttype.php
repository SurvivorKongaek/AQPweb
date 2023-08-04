<?php
require("header.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbgoodstype ออกมา
    $sql = $con->query("SELECT* FROM tbgoodstype");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goodsType_name = $data->goodsType_name;

    $sql = $con->query("INSERT INTO tbgoodstype (goodsType_name)VALUES('$goodsType_name')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goodsType_id = $data->goodsType_id;
    $goodsType_name = $data->goodsType_name;

    $sql = $con->query("UPDATE tbgoodstype SET goodsType_name='$goodsType_name' WHERE goodsType_id='$goodsType_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $goodsType_id = $_GET["goodsType_id"];
    $sql = $con->query("DELETE FROM tbgoodstype WHERE goodsType_id ='$goodsType_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
