import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddFgService } from '../add-fg.service';

@Component({
  selector: 'app-put-add-fg',
  templateUrl: './put-add-fg.component.html',
  styleUrls: ['./put-add-fg.component.css']
})
export class PutAddFgComponent implements OnInit {

  model = {
    goods_partNo:'',
    fgIn_qty: 0,
  };
  constructor(private httpClient: HttpClient,
    private AddFgService :AddFgService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.AddFgService.editModel;
  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.AddFgService.putAddFg(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}


