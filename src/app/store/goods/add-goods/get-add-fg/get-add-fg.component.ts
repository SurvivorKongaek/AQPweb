import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddFgService } from '../add-fg.service';

@Component({
  selector: 'app-get-add-fg',
  templateUrl: './get-add-fg.component.html',
  styleUrls: ['./get-add-fg.component.css']
})
export class GetAddFgComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private AddFgService: AddFgService) { }

  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  goods_partNo:any;
  ngOnInit(): void {
    this.httpClient.get('http://localhost/api_aqpweb/fgIn.php')
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

  onNextPage() {
    if (this.startPage == this.pagination.length) {
      return;
    }
    this.startPage = this.startPage + 1;
  }
  getPagingItems(pageItems: any[]) { //เมธอดแบ่งข้อมูลเป็นหน้าๆ
    return pageItems.slice((this.startPage - 1) * this.pageLimit, this.startPage * this.pageLimit);
  }
  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.AddFgService.editModel, item);
    console.log(this.AddFgService.editModel);
  }
  onDelete(item: any) {
    Object.assign(this.AddFgService.editModel, item);
  }
  printPage() {
    window.print();
  }
}
