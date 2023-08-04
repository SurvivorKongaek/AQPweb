import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerSaleService {

editModel: ICustomer = Object.assign({});
url='http://localhost/api_aqpweb/customer.php';

  constructor(private httpClient:HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postCustomer(data:any){
    // console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getCustomer(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putCustomer(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteCustomer(cus_id: string){
    console.log(cus_id);
    return this.httpClient.delete(this.url + '?cus_id='  + cus_id);
  }
}


export interface ICustomer {
  cus_id:number,
  cus_code:string,
  cus_name:string,
  cus_picName:string,
  cus_tel:string,
  cus_credit:string,
  cus_email:string,
  cus_address:string,
  };
