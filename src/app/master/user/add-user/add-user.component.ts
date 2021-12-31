import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  roleData: Role[] = [];
  _id: string;

  constructor(
    public roleService :RoleApiService,
    public userService: UserApiService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    public notification: NotificationService) { }

  ngOnInit() {

    this.user = this.data?.user;
    this.roleService.getRoleAll().subscribe(data => {
      this.roleData = data;
    });

    if (this.user) {
      this.userService.userForm.patchValue(this.user);
      this.userService.userForm.get('role')?.setValue(this.user.role._id);
    }

  }


  onSave() {
    if (this.user) {
      this.userService.updateUser(this.userService.userForm.value, this.user._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("edited successfully!!");
      });
    } else {
      this.userService.addUser(this.userService.userForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added successfully!!");
      })
    }
  }

}
