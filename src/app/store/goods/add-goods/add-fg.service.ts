import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddFgService {
  editModel:IAddFg = Object.assign({});
  url='http://localhost/api_aqpweb/fgIn.php';
  constructor(private httpClient:HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postAddFg(data:any){
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getAddFg(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putAddFg(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteAddFg(fgIn_id: string){
    console.log(fgIn_id);
    return this.httpClient.delete(this.url + '?fgIn_id='  + fgIn_id);
  }
}


export interface IAddFg {
  fgIn_id:string,
  fgIn_date:Date,
  goods_partNo:string,
  fgIn_qty:number,
  };
