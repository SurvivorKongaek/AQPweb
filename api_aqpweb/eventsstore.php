<?php
require("header.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbstore ออกมา
    $sql = $con->query("SELECT* FROM tbeventsstore");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล

    $store_name = $data->store_name;
    $sql = $con->query("INSERT INTO tbeventsstore (goods_id,goods_partNo,eventsStore_quantity,eventsStore_action)
                        VALUES('$store_name'),'$goods_partNo','$eventsStore_quantity','$eventsStore_action')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $eventsStore_id = $data->eventsStore_id;
    $eventsStore_timestamp = $data->eventsStore_timestamp;
    $goods_id = data ->goods_id;
    $goods_partNo = $data->goods_partNo;
    $eventsStore_quantity = $data->eventsStore_quantity;
    $eventsStore_action = $data->eventsStore_action;
    $sql = $con->query("UPDATE tbeventsstore SET goods_id='$goods_id',goods_partNo='$goods_partNo',eventsStore_quantity='$eventsStore_quantity',eventsStore_action='$eventsStore_action',
                         WHERE eventsStore_id='$eventsStore_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

// if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
//     $store_id = $_GET["store_id"];
//     $sql = $con->query("DELETE FROM tbstore WHERE store_id ='$store_id '");
//     //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
//     if ($sql) {
//         exit(json_encode(['status' => 'Delete success']));
//     } else { //ไม่พบ
//         exit(json_encode(['status' => 'cannot Delete']));
//     }
// }
