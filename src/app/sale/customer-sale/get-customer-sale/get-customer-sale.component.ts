import { CustomerSaleService } from './../customer-sale.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-customer-sale',
  templateUrl: './get-customer-sale.component.html',
  styleUrls: ['./get-customer-sale.component.css']
})
export class GetCustomerSaleComponent implements OnInit {
  data: any;
  pageLimit = 10; //กำหนดตัวแหรเก็บจำนวนที่แสดงผลต่อหน้า 1 หน้า 
  pagination: number[] = []; //ตัวแปรเก็บเลขหน้าทั้งหมด
  startPage = 1;
  cus_name:any;
  constructor(private HttpClient: HttpClient,
    private CustomerSaleService:CustomerSaleService) { }


  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/customer.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
  }
  Search(){
    if(this.cus_name==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter((res: {
        cus_name: any; firstname: { toLowerCase: () => string; }; 
  }) =>{
        return res.cus_name.toLowerCase().match(this.cus_name.toLowerCase());
      })
    }
  }

  onEdit(item: any) {
    //นำข้อมูลที ่user คลิกเพื่อแก้ไขไปเก็บไว้ที่ตัวแปร editModel
    Object.assign(this.CustomerSaleService.editModel, item);
    console.log(this.CustomerSaleService.editModel);
  }



  onDelete(item: any) {
    Object.assign(this.CustomerSaleService.editModel, item);
  }
  printPage() {
    window.print();
  }
}
