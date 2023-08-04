import { GoodsSaleService } from './../goods-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-goode-sale',
  templateUrl: './delete-goode-sale.component.html',
  styleUrls: ['./delete-goode-sale.component.css']
})
export class DeleteGoodeSaleComponent implements OnInit {
item:any;
  constructor(private GoodsSaleService:GoodsSaleService) { }

  ngOnInit(): void {
    this.item = this.GoodsSaleService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteUserModal').modal('hide');
    this.GoodsSaleService.deleteGoodsSale (this.item.goods_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}