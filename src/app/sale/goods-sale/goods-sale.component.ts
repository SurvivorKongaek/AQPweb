import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-sale',
  templateUrl: './goods-sale.component.html',
  styleUrls: ['./goods-sale.component.css']
})
export class GoodsSaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
      printPage() {
      window.print();
    }

}
