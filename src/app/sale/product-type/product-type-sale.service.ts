import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeSaleService {
  editModel:IGoodsType = Object.assign({});
  url='http://localhost/api_aqpweb/producttype.php';
  constructor(private httpClient:HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postgoodsType(data:any){
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getgoodsType(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putgoodsType(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deletegoodsType(goodsType_id: string){
    console.log(goodsType_id);
    return this.httpClient.delete(this.url + '?goodsType_id='  + goodsType_id);
  }
}


export interface IGoodsType {
  goodsType_id:number,
  goodsType_name:string,

  };
