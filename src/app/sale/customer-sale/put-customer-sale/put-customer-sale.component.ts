import { CustomerSaleService } from './../customer-sale.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-put-customer-sale',
  templateUrl: './put-customer-sale.component.html',
  styleUrls: ['./put-customer-sale.component.css']
})
export class PutCustomerSaleComponent implements OnInit {
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
  constructor(private httpClient: HttpClient,
    private CustomerSaleService: CustomerSaleService) { }

  statusItems: any;
  ngOnInit(): void {
    //นำค่า editModel เก็บในตัวแปร model
    this.model = this.CustomerSaleService.editModel;


  }
  onEdit(): void {
    //จะเรียกใช้ userService เพื่อแก้ไขข้อมูล
    this.CustomerSaleService.putCustomer(this.model)
      .subscribe(result => {
        console.log(result);
        location.reload();
      })
  }
}

