import { userService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
  styleUrls: ['./put-user.component.css']
})
export class PutUserComponent implements OnInit {
  model = {
    userId: 0,
    username: '',
    password: '',
    posId: 0,
    status: '',

    

  };
  constructor(private httpClient: HttpClient,
    private userService: userService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.userService.editModel;
  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.userService.putUser(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}

