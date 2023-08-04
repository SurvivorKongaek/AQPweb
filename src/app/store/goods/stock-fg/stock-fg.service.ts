import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockFgService {

  // editModel:IAddFg = Object.assign({});
  url='http://localhost/api_aqpweb/stockFg.php';
  constructor(private httpClient:HttpClient) { }

  getStockFg(){
    return this.httpClient.get(this.url);
  }
  printPage() {
    window.print();
  }

}


// export interface IAddFg {
//   fgIn_id:string,
//   fgIn_date:Date,
//   goods_partNo:string,
//   fgIn_qty:number,
//   };
