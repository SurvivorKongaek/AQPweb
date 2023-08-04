import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StockFgService } from './stock-fg.service';

@Component({
  selector: 'app-stock-fg',
  templateUrl: './stock-fg.component.html',
  styleUrls: ['./stock-fg.component.css']
})
export class StockFgComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private StockFgService: StockFgService) { }

  data: any;
  pageLimit = 10; //กำหนดตัวแปรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  goods_partNo:any;
  ngOnInit(): void {
    this.httpClient.get('http://localhost/api_aqpweb/stockFg.php')
      .subscribe(result => {
        this.data = result;
        console.log(result);

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

  onNextPage() {
    if (this.startPage == this.pagination.length) {
      return;
    }
    this.startPage = this.startPage + 1;
  }
  getPagingItems(pageItems: any[]) { //เมธอดแบ่งข้อมูลเป็นหน้าๆ
    return pageItems.slice((this.startPage - 1) * this.pageLimit, this.startPage * this.pageLimit);
  }
    printPage() {
      window.print();
    }

}
