import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  userForm: FormGroup;

  dataRole :Role[] =[];

  constructor(public userService : UserApiService,
    private roleApi:RoleApiService,
    public dialogRef:MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    public notification : NotificationService) { }

  ngOnInit() {
    this.roleApi.getRoleAll().subscribe(data => {
      this.dataRole = data;
    });

    if (this.data.user) {
      // this.userForm.setValue()
      this.userForm.patchValue(this.data.user);
      this.userForm.get('role')?.setValue(this.data.user.role._id);
    }
  }

  onClear(){
    this.userService.userForm.reset();
    this.userService.initializeFormGroup();
  }

  onSave(){
    console.log(this.userService.userForm.value);
    this.userService.addUser(this.userService.userForm.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.notification.success("successfullly data added!!");
    })
  }

}
