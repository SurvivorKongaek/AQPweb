<?php
require("header.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbuser ออกมา
    $sql = $con->query("SELECT* FROM tbfgOut ORDER BY fgOut_date DESC");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goods_partNo = $data->goods_partNo;
    $fgOut_qty = $data->fgOut_qty;


    $sql = $con->query("INSERT INTO tbfgOut (goods_partNo,fgOut_qty)VALUES('$goods_partNo','$fgOut_qty')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $fgOut_id = $data->fgOut_id;
    $goods_partNo = $data->goods_partNo;
    $fgOut_qty = $data->fgOut_qty;
    $sql = $con->query("UPDATE tbfgOut SET goods_partNo='$goods_partNo', fgOut_qty='$fgOut_qty' WHERE fgOut_id='$fgOut_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $fgOut_id = $_GET["fgOut_id"];
    $sql = $con->query("DELETE FROM tbfgOut WHERE fgOut_id ='$fgOut_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
