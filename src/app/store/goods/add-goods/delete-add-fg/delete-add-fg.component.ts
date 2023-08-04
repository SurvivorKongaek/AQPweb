import { Component, OnInit } from '@angular/core';
import { AddFgService } from '../add-fg.service';
declare const $: any;
@Component({
  selector: 'app-delete-add-fg',
  templateUrl: './delete-add-fg.component.html',
  styleUrls: ['./delete-add-fg.component.css']
})
export class DeleteAddFgComponent implements OnInit {
  item:any;
  constructor(private AddFgService :AddFgService) { }

  ngOnInit(): void {
    this.item = this.AddFgService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteAddFgModal').modal('hide');
    this.AddFgService.deleteAddFg(this.item.fgIn_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}