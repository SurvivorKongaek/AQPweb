import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {
  editModel: Iuser = Object.assign({});
  url = 'http://localhost/api_aqpweb/user.php';
  constructor(private httpClient: HttpClient) { }
  //สร้างเมธอดใน Sevice เพื่อเชื่อกับ API
  postUser(data: any) {
    console.log(data);
    return this.httpClient.post(this.url, data);
  }
  getUser() {
    return this.httpClient.get(this.url);
  }
  //สร้างเมธอดสำหรับแก้ไขข้อมูล
  putUser(data: any) {
    return this.httpClient.put(this.url, data);
  }
  // //สร้างเมธอดสำหรับลบข้อมูล
  deleteUser(userId: number) {
    console.log(userId);
    return this.httpClient.delete(this.url + '?userId=' + userId);
  }
}


export interface Iuser {
  userId: number,
  username: string,
  password: string,
  posId: number,
  status: string
};

