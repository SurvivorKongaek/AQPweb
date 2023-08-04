import { HttpClient } from '@angular/common/http';
import { ProductTypeSaleService } from './../product-type-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-product-type',
  templateUrl: './post-product-type.component.html',
  styleUrls: ['./post-product-type.component.css']
})
export class PostProductTypeComponent implements OnInit {
  model = {
    goodsType_name: '',
  };
  constructor(private ProductTypeSaleService: ProductTypeSaleService,
    private httpClient: HttpClient) { }

  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.httpClient.get('http://localhost/api_aqpweb/producttype.php')
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
    this.ProductTypeSaleService.postgoodsType(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}
