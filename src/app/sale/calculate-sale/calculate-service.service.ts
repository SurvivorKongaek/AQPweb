import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {

  url = 'http://localhost/api_aqpweb/customer.php';

  url2 = 'http://localhost/api_aqpweb/rawmaterial.php';

  url3 = 'http://localhost/api_aqpweb/calculate.php';

  constructor(private httpClient: HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
  getCustomer() {
    return this.httpClient.get(this.url);
  }
  getRawMaterial() {
    return this.httpClient.get(this.url2);
  }

  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
  postnewitem(data: any) {
    console.log(data);
    return this.httpClient.post(this.url3, data);
  }


}


export interface ICustomer {
  cus_id: number,
  cus_name: string,
  cus_picName: string,
  cus_tel: string,
  cus_credit: string,
  cus_email: string,
  cus_address: string,
  rm_id: number,
  height: number,
  width: number,
  long: number,
  cost: number,
  profit: number,
  salePrice: number,
  newItemNo: string,
};
