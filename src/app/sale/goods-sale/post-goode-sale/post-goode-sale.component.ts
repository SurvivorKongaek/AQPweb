import { HttpClient } from '@angular/common/http';
import { GoodsSaleService } from './../goods-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-goode-sale',
  templateUrl: './post-goode-sale.component.html',
  styleUrls: ['./post-goode-sale.component.css']
})
export class PostGoodeSaleComponent implements OnInit {
  model = {
    goods_partNo: '',
    goods_name: '',
    goods_typeId: '',
    rm_id: '',
    goods_price: '',
    loc_id: '',
    cus_id: '',

  };
  constructor(private GoodsSaleService: GoodsSaleService,
    private httpClient: HttpClient) { }
  statusItems: any;
  formData = new FormData();
  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.httpClient.get('http://localhost/api_aqpweb/goodsdetail.php')
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
    this.GoodsSaleService.postGoodsSale(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();

      }); location.reload();
  }
}
