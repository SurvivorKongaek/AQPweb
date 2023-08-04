import { CustomerSaleComponent } from './../customer-sale.component';
import { CustomerSaleService } from './../customer-sale.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-customer-sale',
  templateUrl: './delete-customer-sale.component.html',
  styleUrls: ['./delete-customer-sale.component.css']
})
export class DeleteCustomerSaleComponent implements OnInit {
item:any;
  constructor(private CustomerSaleService:CustomerSaleService) { }

  ngOnInit(): void {
    this.item = this.CustomerSaleService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteCustomerModal').modal('hide');
    this.CustomerSaleService.deleteCustomer(this.item.cus_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }
}
