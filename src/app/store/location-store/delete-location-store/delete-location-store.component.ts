import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-location-store',
  templateUrl: './delete-location-store.component.html',
  styleUrls: ['./delete-location-store.component.css']
})
export class DeleteLocationStoreComponent implements OnInit {
  item:any;
  constructor(private StoreService:StoreService) { }

  ngOnInit(): void {
    this.item = this.StoreService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteStoreModal').modal('hide');
    this.StoreService.deleteStore(this.item.store_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}