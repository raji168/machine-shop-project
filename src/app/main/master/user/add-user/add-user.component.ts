import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  roleData: Role[] = [];

  // roleDataSource$ : Observable<MatTableDataSource<Role>>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    public roleService: RoleApiService,
    public userService: UserApiService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
    this.userForm = this.fb.group({
      sno: ['',Validators.required],
      name: ['',Validators.required],
      role: '',
      emailId: ['',[Validators.required, Validators.email]],
      phoneNo: ['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      userName: ['',Validators.required],
      password: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]],
    });
  }

  ngOnInit() {
    this.roleService.get().subscribe(data => {
      this.roleData = data;
    })
    this.user = this.data?.user;
    console.log(this.user)
    if (this.user) {
      this.userForm.patchValue(this.data.user);
      this.userForm.get('role')?.setValue(this.data.user.role._id);
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
      });
    }
}

}
