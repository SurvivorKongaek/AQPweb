import { HttpClient } from '@angular/common/http';
import { CustomerSaleService } from './../customer-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-post-customer-sale',
  templateUrl: './post-customer-sale.component.html',
  styleUrls: ['./post-customer-sale.component.css']
})
export class PostCustomerSaleComponent implements OnInit {
  model = {
    cus_name: '',
    cus_code: '',
    cus_picName: '',
    cus_tel: '',
    cus_credit: '',
    cus_email: '',
    cus_address: '',

  };
  constructor(private CustomerSaleService:CustomerSaleService,
    private httpClient: HttpClient) { }

  statusItems: any;
  formData = new FormData();

  ngOnInit(): void {
    //ดึงข้อมูลจากตาราง tbStatus
    this.httpClient.get('http://localhost/api_aqpweb/customer.php')
      .subscribe(result => {
        this.statusItems = result;
        //console.log(this.statusItems);
      });
  }
  onSubmit() {

    //console.log(this.model);return;
    //เขียนคำสั่งinsert ข้อมูลลงตาราง tbEmployee
    //เรียนใช้เมธอด postEmployee ผ่าน  EmployeeService
    $('#addEmployeeModal').modal('hide');
    this.CustomerSaleService.postCustomer(this.model)
      .subscribe(result => {
        console.log(result);

        location.reload();
      });
  }
}
