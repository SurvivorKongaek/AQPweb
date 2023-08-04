import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuotatioServiceService } from '../quotatio-service.service';

@Component({
  selector: 'app-get-quotation',
  templateUrl: './get-quotation.component.html',
  styleUrls: ['./get-quotation.component.css']
})
export class GetQuotationComponent implements OnInit {

  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  cus_name: any;

  model = {
    cus_id: 0,
    cus_code: '',
    cus_name: '',
    cus_picName: '',
    cus_tel: '',
    cus_credit: '',
    cus_email: '',
    cus_address: '',
  };
  
  constructor(private HttpClient: HttpClient,
    private QuotatioServiceService: QuotatioServiceService) { }


  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/customer.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }
  Search() {
    if (this.cus_name == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter((res: {
        cus_name: any; firstname: { toLowerCase: () => string; };
      }) => {
        return res.cus_name.toLowerCase().match(this.cus_name.toLowerCase());
      })
    }
  }

  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.QuotatioServiceService.editModel, item);
    console.log(this.QuotatioServiceService.editModel);
  }



  onDelete(item: any) {
    Object.assign(this.QuotatioServiceService.editModel, item);
  }
  printPage() {
    window.print();
  }
}

