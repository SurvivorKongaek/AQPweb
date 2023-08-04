import { StoreService } from './../store.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-location-store',
  templateUrl: './put-location-store.component.html',
  styleUrls: ['./put-location-store.component.css']
})
export class PutLocationStoreComponent implements OnInit {
  model = {
    store_id: 0,
    store_name: '',
  };
  constructor(private httpClient: HttpClient,
    private StoreService: StoreService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.StoreService.editModel;
  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.StoreService.putStore(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}

