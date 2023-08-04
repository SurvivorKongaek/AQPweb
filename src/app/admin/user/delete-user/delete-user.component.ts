import { userService } from './../user.service';
import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  item: any;
  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.item = this.userService.editModel;
    console.log(this.item);
  }
  onDelete(): void {
    $('deleteUserModal').modal('hide');
    this.userService.deleteUser(this.item.userId)
      .subscribe(result => {
        console.log(result);
        location.reload();
      });
  }

}