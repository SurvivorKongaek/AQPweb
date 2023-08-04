import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  editModel:IStore = Object.assign({});
  url='http://localhost/api_aqpweb/store.php';
  constructor(private httpClient:HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
   postStore(data:any){
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getStore(){
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putStore(data:any){
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteStore(store_id: string){
    console.log(store_id);
    return this.httpClient.delete(this.url + '?store_id='  + store_id);
  }
}


export interface IStore {
  store_id:number,
  store_name:string,
  };
