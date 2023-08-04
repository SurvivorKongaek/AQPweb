import { Component, OnInit } from '@angular/core';
import { CutFgService } from '../cut-fg.service';
declare const $: any;
@Component({
  selector: 'app-delete-cut-fg',
  templateUrl: './delete-cut-fg.component.html',
  styleUrls: ['./delete-cut-fg.component.css']
})
export class DeleteCutFgComponent implements OnInit {
  item:any;
  constructor(private CutFgService :CutFgService) { }

  ngOnInit(): void {
    this.item = this.CutFgService.editModel;
    console.log(this.item);
  }
  onDelete():void{
    $('deleteAddFgModal').modal('hide');
    this.CutFgService.deleteCutFg(this.item.fgOut_id)
    .subscribe(result =>{
      console.log(result);
      location.reload();
    });
  }

}