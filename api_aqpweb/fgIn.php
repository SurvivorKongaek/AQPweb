<?php
require("header.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbuser ออกมา
    $sql = $con->query("SELECT* FROM tbfgin  ORDER BY fgIn_date DESC");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goods_partNo = $data->goods_partNo;
    $fgIn_qty = $data->fgIn_qty;


    $sql = $con->query("INSERT INTO tbfgin (goods_partNo,fgIn_qty)VALUES('$goods_partNo','$fgIn_qty')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $fgIn_id = $data->fgIn_id;
    $goods_partNo = $data->goods_partNo;
    $fgIn_qty = $data->fgIn_qty;
    $sql = $con->query("UPDATE tbfgin SET goods_partNo='$goods_partNo', fgIn_qty='$fgIn_qty' WHERE fgIn_id='$fgIn_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $fgIn_id = $_GET["fgIn_id"];
    $sql = $con->query("DELETE FROM tbfgin WHERE fgIn_id ='$fgIn_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
