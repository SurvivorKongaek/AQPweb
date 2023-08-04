import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RawMaterialService } from '../raw-material.service';

@Component({
  selector: 'app-put-raw-material',
  templateUrl: './put-raw-material.component.html',
  styleUrls: ['./put-raw-material.component.css']
})
export class PutRawMaterialComponent implements OnInit {

  model = {
    rm_id:0,
    rm_name:'',
    rm_type:'',
    rm_price:0,

  };
  constructor(private HttpClient: HttpClient,
    private RawMaterialService: RawMaterialService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.RawMaterialService.editModel;




  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.RawMaterialService.putRawMaterial(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}

