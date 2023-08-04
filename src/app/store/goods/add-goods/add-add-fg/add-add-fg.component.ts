import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddFgService } from '../add-fg.service';
declare const $: any; 
@Component({
  selector: 'app-add-add-fg',
  templateUrl: './add-add-fg.component.html',
  styleUrls: ['./add-add-fg.component.css']
})
export class AddAddFgComponent implements OnInit {

  model = {
    goods_partNo: '',
    fgIn_qty: 0,
  };




  constructor(private AddFgService :AddFgService,
    private HttpClient: HttpClient) { }

  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.HttpClient.get('http://localhost/api_aqpweb/store.php')
      .subscribe(result => {
        this.statusItems = result;
        //console.log(this.statusItems);
      });
  }
  onSubmit() {

    //console.log(this.model);return;
    //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
    //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
    $('#addFgModal').modal('hide');
    this.AddFgService.postAddFg(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}

