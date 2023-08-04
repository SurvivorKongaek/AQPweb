import { userService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  model = {
    username: '',
    password: '',
    posId: '',
    status: '',

  };

  constructor(private userService: userService,
    private httpClient: HttpClient) { }


  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.httpClient.get('http://localhost/api_aqpweb/user.php')
      .subscribe(result => {
        this.statusItems = result;
        //console.log(this.statusItems);
      });
  }
  onSubmit() {

    //console.log(this.model);return;
    //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
    //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
    $('#addEmployeeModal').modal('hide');
    this.userService.postUser(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}
