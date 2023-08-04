import { RawMaterialService } from './../raw-material.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-raw-material',
  templateUrl: './get-raw-material.component.html',
  styleUrls: ['./get-raw-material.component.css']
})
export class GetRawMaterialComponent implements OnInit {

  constructor(private HttpClient: HttpClient,
    private RawMaterialService: RawMaterialService) { }

  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  rm_name:any;
  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/rawMaterial.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

        
      })
  }
  
  Search(){
    if(this.rm_name==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter((res: {
        rm_name: any; firstname: { toLowerCase: () => string; }; 
  }) =>{
        return res.rm_name.toLowerCase().match(this.rm_name.toLowerCase());
      })
    }
  }

  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.RawMaterialService.editModel, item);
    console.log(this.RawMaterialService.editModel);
  }
  onDelete(item: any) {
    Object.assign(this.RawMaterialService.editModel, item);
  }


  printPage() {
    window.print();
  }

}
