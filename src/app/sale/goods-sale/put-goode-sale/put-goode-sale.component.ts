import { GoodsSaleService } from './../goods-sale.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-goode-sale',
  templateUrl: './put-goode-sale.component.html',
  styleUrls: ['./put-goode-sale.component.css']
})
export class PutGoodeSaleComponent implements OnInit {
model={
  goods_id: 0,
  goods_partNo: '',
  goods_name: '',
  goods_typeId: '',
  rm_id: '',
  goods_price: 0,
  loc_id: 0,
  cus_id: 0,

}
  constructor(private httpClient:HttpClient,
    private GoodsSaleService:GoodsSaleService) { }
    statusItems: any;
    ngOnInit(): void {
      //นำค่า editModel เก็บในตัวแปร model
      this.model = this.GoodsSaleService.editModel;
  
  
  
  
    }
    onEdit(): void {
      //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
      this.GoodsSaleService.putGoodsSale(this.model)
        .subscribe(result => {
          console.log(result);
          location.reload();
        })
    }
  }