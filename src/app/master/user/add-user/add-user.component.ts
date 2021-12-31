import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  userdata: User[] = [];
  _id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    public userService: UserApiService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    public notification: NotificationService) { }

  ngOnInit() {

    this.user = this.data?.user;
    this.userService.getUserAll().subscribe(data => {
      this.userdata = data;
    });

    if (this.user) {
      this.userService.userForm.patchValue(this.data.user);
    }

  }

  onSave() {
    if (this.user) {
      this.userService.updateUser(this.userService.userForm.value, this.user._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.userService.addUser(this.userService.userForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added successfully!!");
      })
    }
  }

}
