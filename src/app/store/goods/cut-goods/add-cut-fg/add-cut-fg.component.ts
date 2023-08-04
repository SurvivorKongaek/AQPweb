import { Component, OnInit } from '@angular/core';
import { CutFgService } from '../cut-fg.service';
import { HttpClient } from '@angular/common/http';
declare const $: any; 
@Component({
  selector: 'app-add-cut-fg',
  templateUrl: './add-cut-fg.component.html',
  styleUrls: ['./add-cut-fg.component.css']
})
export class AddCutFgComponent implements OnInit {

  model = {
    goods_partNo: '',
    fgOut_qty: 0,
  };




  constructor(private CutFgService : CutFgService,
    private HttpClient: HttpClient) { }

  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.HttpClient.get('http://localhost/api_aqpweb/fgOut.php')
      .subscribe(result => {
        this.statusItems = result;
        //console.log(this.statusItems);
      });
  }
  onSubmit() {

    //console.log(this.model);return;
    //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
    //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
    $('#CutFgModal').modal('hide');
    this.CutFgService.postCutFg(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}
