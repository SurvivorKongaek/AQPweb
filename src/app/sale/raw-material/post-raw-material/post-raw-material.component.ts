import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { RawMaterialService } from './../raw-material.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-raw-material',
  templateUrl: './post-raw-material.component.html',
  styleUrls: ['./post-raw-material.component.css']
})
export class PostRawMaterialComponent implements OnInit {
  model = {
    rm_name: '',
    rm_type: '',
    rm_price: '',

  };
  constructor(private RawMaterialService:RawMaterialService,
    private httpClient:HttpClient) { }

    statusItems: any;
    formData = new FormData();

    ngOnInit(): void {

    }
    onSubmit() {

      //console.log(this.model);return;
      //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
      //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
      $('#addEmployeeModal').modal('hide');
      this.RawMaterialService.postRawMaterial(this.model)
        .subscribe(result => {
          console.log(result);

          location.reload();
        });
    }
  }
