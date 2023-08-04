import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsSaleService {
  editModel: IGoodsSale = Object.assign({});
  url = 'http://localhost/api_aqpweb/goodsdetail.php';
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
}


export interface IGoodsSale {
  goods_id: number,
  goods_partNo: string,
  goods_name: string,
  goods_typeId: string,
  rm_id: string,
  goods_price: number,
  loc_id: number,
  cus_id: number,
};
