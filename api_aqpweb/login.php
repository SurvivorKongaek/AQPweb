<?php
require("header.php");
//เช็ค Method ที่เรียกใช้งาน
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    //เช็คว่ามีการส่งค่ามามั้ย
    if (isset($_GET["username"]) && isset($_GET["password"])) {
        //เขียน sql ค้นหาข้อมูล
        $username = $_GET["username"];
        $password = $_GET["password"];
        $sql = $con->query("SELECT *FROM tbuser
        WHERE username='$username'AND password='$password'");
        //เช็คผมลัพธ์ว่ามีข้อมูลหรือไม่
        if (mysqli_num_rows($sql) > 0) { //พบ
            $data = $sql->fetch_array(); //อ่านค่าที่พบเก็บในตัวแปร $data
            exit(json_encode(["status" => $data['status']]));
        } else { //ไม่พบ
            exit(json_encode(["status" => "not found"]));
        }
    } else {
        exit(json_encode(["status" => "error"]));
    }
}
