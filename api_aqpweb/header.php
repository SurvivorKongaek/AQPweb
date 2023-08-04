<?php
   //เขียนโปรแกรมภาษา PHP เพื่อ login
   header('content-Type:application/json;charset=utf8');
   header('Access-control-Allow-Origin: *');
   header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE,PATCH");
   header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept,Authorization");
   $con = mysqli_connect("localhost","root","","dbaqp");
