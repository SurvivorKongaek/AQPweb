import { userService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  p:number = 1;
  username: any;
  constructor(private HttpClient: HttpClient,
    private userService: userService) { }


  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/user.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }

  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.userService.editModel, item);
    console.log(this.userService.editModel);
  }

  onDelete(item: any) {
    Object.assign(this.userService.editModel, item);
  }

  Search() {
    if (this.username == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter((res: {
        username: any; firstname: { toLowerCase: () => string; };
      }) => {
        return res.username.toLowerCase().match(this.username.toLowerCase());
      })
    }
  }



}

