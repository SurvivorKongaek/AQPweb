import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CutFgService {

  editModel:ICutFg = Object.assign({});
  url='http://localhost/api_aqpweb/fgOut.php';
  constructor(private httpClient:HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postCutFg(data:any){
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getCutFg(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putCutFg(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteCutFg(fgOut_id: string){
    console.log(fgOut_id);
    return this.httpClient.delete(this.url + '?fgOut_id='  + fgOut_id);
  }
}


export interface ICutFg {
  fgOut_id:string,
  fgOut_date:Date,
  goods_partNo:string,
  fgOut_qty:number,
  };
