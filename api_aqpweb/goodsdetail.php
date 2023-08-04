
<?php
require("header.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbgoodsdetail ออกมา
    $sql = $con->query("SELECT* FROM tbgoodsdetail");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goods_partNo = $data->goods_partNo;
    $goods_name = $data->goods_name;
    $goods_typeId = $data->goods_typeId;
    $rm_id = $data->rm_id;
    $goods_price = $data->goods_price;
    $loc_id = $data->loc_id;
    $cus_id = $data->cus_id;

    $sql = $con->query("INSERT INTO tbgoodsdetail (goods_partNo,goods_name,goods_typeId,rm_id,goods_price,loc_id,cus_id)VALUES('$goods_partNo','$goods_name','$goods_typeId','$rm_id','$goods_price','$loc_id','$cus_id')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $goods_id = $data->goods_id;
    $goods_partNo = $data->goods_partNo;
    $goods_name = $data->goods_name;
    $goods_typeId = $data->goods_typeId;
    $rm_id = $data->rm_id;
    $goods_price = $data->goods_price;
    $loc_id = $data->loc_id;
    $cus_id = $data->cus_id;
    $sql = $con->query("UPDATE tbgoodsdetail SET goods_partNo='$goods_partNo', goods_name='$goods_name', goods_typeId='$goods_typeId', rm_id='$rm_id', goods_price='$goods_price', loc_id='$loc_id', cus_id='$cus_id' WHERE goods_id='$goods_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $goods_id = $_GET["goods_id"];
    $sql = $con->query("DELETE FROM tbgoodsdetail WHERE goods_id ='$goods_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
