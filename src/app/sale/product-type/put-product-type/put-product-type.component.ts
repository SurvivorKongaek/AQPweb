import { HttpClient } from '@angular/common/http';
import { ProductTypeSaleService } from './../product-type-sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-product-type',
  templateUrl: './put-product-type.component.html',
  styleUrls: ['./put-product-type.component.css']
})
export class PutProductTypeComponent implements OnInit {
  model = {
    goodsType_id: 0,
    goodsType_name: '',

  };
  constructor(private HttpClient: HttpClient,
    private ProductTypeSaleService:ProductTypeSaleService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.ProductTypeSaleService.editModel;




  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.ProductTypeSaleService.putgoodsType(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}

