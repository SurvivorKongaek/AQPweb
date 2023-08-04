import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  data: any;
  url = 'http://localhost/api_aqpweb/login.php';
  constructor(private router:Router, private httpCliant: HttpClient) { }

  ngOnInit(): void {
  }
  doLogin() {

    //เขียนคำสั่งเพื่อตรวจสอบ username password

    this.httpCliant.get('http://localhost/api_aqpweb/login.php?username='+this.username+'&password='+this.password)
      .subscribe(result => {
        console.log(result);
        this.data = result;
        //นำค่า status มาตรวจสอบ
        if (this.data.status === 'admin') {
          this.router.navigate(['/admin']);
        } else if (this.data.status === 'sale') {
          this.router.navigate(['/sale']);
        } else if (this.data.status === 'store') {
          this.router.navigate(['/store']);
        } else if (this.data.status === 'manager') {
          this.router.navigate(['/manager']);

        } else {
          alert('ไม่พบผู้ใช้งาน');
        }
      });
  }
}
