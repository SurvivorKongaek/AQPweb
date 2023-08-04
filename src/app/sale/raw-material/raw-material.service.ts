import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
  editModel:IRawmat = Object.assign({});
  url='http://localhost/api_aqpweb/rawmaterial.php';
  constructor(private httpClient:HttpClient) { }

  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postRawMaterial(data:any){
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getRawMaterial(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putRawMaterial(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteRawMaterial(rm_id: string){
    console.log(rm_id);
    return this.httpClient.delete(this.url + '?rm_id='  + rm_id);
  }
}


export interface IRawmat {
  rm_id:number,
  rm_name:string,
  rm_type:string,
  rm_price:number,
  };
