import { StoreService } from './../store.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-location-store',
  templateUrl: './get-location-store.component.html',
  styleUrls: ['./get-location-store.component.css']
})
export class GetLocationStoreComponent implements OnInit {

  constructor(private httpClient: HttpClient,
    private StoreService: StoreService) { }

  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  store_name:any;
  ngOnInit(): void {
    this.httpClient.get('http://localhost/api_aqpweb/store.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }
  Search(){
    if(this.store_name==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter((res: {
        store_name: any; firstname: { toLowerCase: () => string; }; 
  }) =>{
        return res.store_name.toLowerCase().match(this.store_name.toLowerCase());
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
    Object.assign(this.StoreService.editModel, item);
    console.log(this.StoreService.editModel);
  }
  onDelete(item: any) {
    Object.assign(this.StoreService.editModel, item);
  }
  printPage() {
    window.print();
  }
}
