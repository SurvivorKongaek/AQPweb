import { ProductTypeSaleService } from './../product-type-sale.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-product-type',
  templateUrl: './get-product-type.component.html',
  styleUrls: ['./get-product-type.component.css']
})
export class GetProductTypeComponent implements OnInit {
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  constructor(private HttpClient: HttpClient,
    private ProductTypeSaleService: ProductTypeSaleService) { }

  data: any;
  goodsType_name:any;
  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/producttype.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }
  
  Search(){
    if(this.goodsType_name==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter((res: {
        goodsType_name: any; firstname: { toLowerCase: () => string; }; 
  }) =>{
        return res.goodsType_name.toLowerCase().match(this.goodsType_name.toLowerCase());
      })
    }
  }

  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.ProductTypeSaleService.editModel, item);
    console.log(this.ProductTypeSaleService.editModel);
  }
  onDelete(item: any) {
    Object.assign(this.ProductTypeSaleService.editModel, item);
  }

  printPage() {
    window.print();
  }
}
