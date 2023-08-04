import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checked: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  loadScrip(){

    $('[data-toggle="tooltip"]').tooltip();
    
    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(() =>{
      if(this.checked){
        checkbox.each(() =>{
          this.checked = true;                        
        });
      } else{
        checkbox.each(() =>{
          this.checked = false;                        
        });
      } 
    });
    checkbox.click(() =>{
      if(!this.checked){
        $("#selectAll").prop("checked", false);
      }
    });
    }
}
