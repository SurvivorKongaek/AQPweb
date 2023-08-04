import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimestampProvider } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  editModel: Ievents = Object.assign({});
  url = 'http://localhost/api_aqpweb/goodsdetail.php';
  url2 = 'http://localhost/api_aqpweb/eventsStore.php';
  constructor(private httpClient: HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
  postGoodsSale(data: any) {
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getGoodsSale() {
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putGoodsSale(data: any) {
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteGoodsSale(goods_id: string) {
    console.log(goods_id);
    return this.httpClient.delete(this.url + '?goods_id=' + goods_id);
  }

  postEventsstore(data: any) {
    console.log(data);
    return this.httpClient.post(this.url2, data);
  }


}
export interface Ievents {
  eventsStore_id : number,
  eventsStore_timestamp: TimestampProvider,
  goods_id: number,
  goods_partNo: string,
  eventsStore_quantity: number,
  eventsStore_action: string
};
