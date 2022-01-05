import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { User } from 'src/app/models/user.model';
import { RoleApiService } from 'src/app/services/role-api.service';
import { Role } from 'src/app/models/role.model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  user: User;

  userForm: FormGroup;

  // roleData: Role[] = [];
  userData: User[] = [];

  _id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    public roleService: RoleApiService,
    public userService: UserApiService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    public notification: NotificationService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      sno: new FormControl(''),
      name: new FormControl(''),
      role: new FormControl(''),
      emailId: new FormControl(''),
      phoneNo: new FormControl(''),
      userName: new FormControl('')
    })

    this.user = this.data?.user;

    this.userService.get().subscribe(data => {
      this.userData = data;
    })

    if (this.user) {
      this.userForm.patchValue(this.data.user);
    }
  }

  onSubmit() {
    if (this.user) {
      this.userService.updateUser(this.userForm.value, this.user._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.userService.addUser(this.userForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added successfully!!");
      })
    }
  }
}
