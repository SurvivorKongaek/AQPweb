import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CutFgService } from '../cut-fg.service';

@Component({
  selector: 'app-put-cut-fg',
  templateUrl: './put-cut-fg.component.html',
  styleUrls: ['./put-cut-fg.component.css']
})
export class PutCutFgComponent implements OnInit {

  model = {
    goods_partNo:'',
    fgOut_qty: 0,
  };
  constructor(private httpClient: HttpClient,
    private CutFgService :CutFgService) { }
  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.CutFgService.editModel;
  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.CutFgService.putCutFg(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}


