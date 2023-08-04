import { HttpClient } from '@angular/common/http';
import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-location-store',
  templateUrl: './post-location-store.component.html',
  styleUrls: ['./post-location-store.component.css']
})
export class PostLocationStoreComponent implements OnInit {
  model = {
    store_name: '',
  };




  constructor(private StoreService: StoreService,
    private HttpClient: HttpClient) { }

  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.HttpClient.get('http://localhost/api_aqpweb/store.php')
      .subscribe(result => {
        this.statusItems = result;
        //console.log(this.statusItems);
      });
  }
  onSubmit() {

    //console.log(this.model);return;
    //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
    //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
    $('#addStoreModal').modal('hide');
    this.StoreService.postStore(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}
