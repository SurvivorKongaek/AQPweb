import { GoodsSaleService } from './../goods-sale.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-goode-sale',
  templateUrl: './get-goode-sale.component.html',
  styleUrls: ['./get-goode-sale.component.css']
})
export class GetGoodeSaleComponent implements OnInit {

  constructor(private HttpClient: HttpClient,
    private GoodsSaleService:GoodsSaleService) { }

  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  goods_partNo:any;
  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/goodsdetail.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }
  
  Search(){
    if(this.goods_partNo==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter((res: {
        goods_partNo: any; firstname: { toLowerCase: () => string; }; 
  }) =>{
        return res.goods_partNo.toLowerCase().match(this.goods_partNo.toLowerCase());
      })
    }
  }


  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.GoodsSaleService.editModel, item);
    console.log(this.GoodsSaleService.editModel);
  }
  onDelete(item: any) {
    Object.assign(this.GoodsSaleService.editModel, item);
  }
  printPage() {
    window.print();
  }

  
}
