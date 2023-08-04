import { RawMaterialService } from './../raw-material.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-raw-material',
  templateUrl: './delete-raw-material.component.html',
  styleUrls: ['./delete-raw-material.component.css']
})
export class DeleteRawMaterialComponent implements OnInit {
  item:any;
  constructor(private RawMaterialService:RawMaterialService) { }

  ngOnInit(): void {
    this.item = this.RawMaterialService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteUserModal').modal('hide');
    this.RawMaterialService.deleteRawMaterial(this.item.rm_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}