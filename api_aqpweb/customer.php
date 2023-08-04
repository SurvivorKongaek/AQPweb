<?php
require("header.php");
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $data = array();
    //ดึงข้อมูลในตาราง tbcustomer ออกมา
    $sql = $con->query("SELECT* FROM tbcustomer");
    while ($d = $sql->fetch_assoc()) {
        $data[] = $d;
    }
    exit(json_encode($data));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $cus_name = $data->cus_name;
    $cus_picName = $data->cus_picName;
    $cus_tel = $data->cus_tel;
    $cus_credit = $data->cus_credit;
    $cus_email = $data->cus_email;
    $cus_address = $data->cus_address;

    $sql = $con->query("INSERT INTO tbcustomer (cus_name,cus_picName,cus_tel,cus_credit,cus_email,cus_address)VALUES('$cus_name','$cus_picName','$cus_tel','$cus_credit','$cus_email','$cus_address')");
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    $data = json_decode(file_get_contents("php://input")); //รับข้อมูล
    $cus_id = $data->cus_id;
    $cus_name = $data->cus_name;
    $cus_picName = $data->cus_picName;
    $cus_tel = $data->cus_tel;
    $cus_credit = $data->cus_credit;
    $cus_email = $data->cus_email;
    $cus_address = $data->cus_address;
    $sql = $con->query("UPDATE tbcustomer SET cus_name='$cus_name', cus_picName='$cus_picName',
        cus_tel='$cus_tel',cus_credit='$cus_credit',cus_email='$cus_email' ,cus_address='$cus_address' WHERE cus_id='$cus_id'");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Edit success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot edit']));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $cus_id = $_GET["cus_id"];
    $sql = $con->query("DELETE FROM tbcustomer WHERE cus_id ='$cus_id '");
    //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
    if ($sql) {
        exit(json_encode(['status' => 'Delete success']));
    } else { //ไม่พบ
        exit(json_encode(['status' => 'cannot Delete']));
    }
}
