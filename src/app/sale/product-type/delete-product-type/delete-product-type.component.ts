import { ProductTypeSaleService } from './../product-type-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-product-type',
  templateUrl: './delete-product-type.component.html',
  styleUrls: ['./delete-product-type.component.css']
})
export class DeleteProductTypeComponent implements OnInit {
  item:any;
  constructor(private ProductTypeSaleService:ProductTypeSaleService) { }


  ngOnInit(): void {
    this.item = this.ProductTypeSaleService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteProductTypeModal').modal('hide');
    this.ProductTypeSaleService.deletegoodsType(this.item.goodsType_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}