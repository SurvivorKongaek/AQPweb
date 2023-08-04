<?php
require("header.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbuser ออกมา
    $sql = $con->query("SELECT* FROM tbnewitem");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $cus_id = $data->cus_id;
    $newmodel_no = $data->newmodel_no;
    $rm_id = $data->rm_id;
    $w = $data->w;
    $l = $data->l;
    $h = $data->h;
    $profit = $data->profit;
    $saleprice = $data->saleprice;
    $cost = $data->cost;

    $sql = $con->query("INSERT INTO tbnewmodel (cus_id,newmodel_no,rm_id,w,l,h,profit,saleprice,cost)
    VALUES('$cus_id','$newmodel_no','$rm_id','$w','$l','$h','$profit','$saleprice','$cost')");
}

// if ($_SERVER["REQUEST_METHOD"] == "PUT") {
//     $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
//     $cus_id = $data->cus_id;
//     $newItemNo = $data->newItemNo;
//     $rm_id = $data->rm_id;
//     $width = $data->width;
//     $long = $data->long;
//     $height = $data->height;
//     $profit = $data->profit;
//     $salePrice = $data->salePrice;
//     $cost = $data->cost;

//     $sql = $con->query("UPDATE tbnewitem SET cus_id='$cus_id',  newItemNo='$newItemNo',rm_id='$rm_id',width='$width',long='$long',height='$height' ,profit='$profit',salePrice='$salePrice' ,cost='$cost' 
//     WHERE newItem_id='$newItem_id'");
//     //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
//     if ($sql) {
//         exit(json_encode(['status' => 'Edit success']));
//     } else { //ไม่พบ
//         exit(json_encode(['status' => 'cannot edit']));
//     }
// }

// if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
//     $userId = $_GET["newItem_id"];
//     $sql = $con->query("DELETE FROM tbnewitem WHERE newItem_id ='$newItem_id '");
//     //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
//     if ($sql) {
//         exit(json_encode(['status' => 'Delete success']));
//     } else { //ไม่พบ
//         exit(json_encode(['status' => 'cannot Delete']));
//     }
// }
