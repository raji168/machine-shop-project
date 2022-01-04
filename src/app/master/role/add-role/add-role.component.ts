import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role.model';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';



@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  role: Role;
  dataRole: Role[] = [];
  roleForm: FormGroup;
  _id: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { role: Role },
    public roleService: RoleApiService,
    public dialogRef: MatDialogRef<AddRoleComponent>,
    public notification: NotificationService) { }

  ngOnInit(): void {

    this.roleForm = new FormGroup({
      serialno: new FormControl(''),
      name: new FormControl('')
    });



    this.role = this.data?.role;

    this.roleService.get().subscribe(data => {
      this.dataRole = data;
    });

    if (this.role) {
      this.roleForm.patchValue(this.role);
    }

  }


  onSubmit() {
    if (this.role) {
      this.roleService.updateRole(this.roleForm.value, this.role._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("successfullly data Edited!!");
      });
    } else {
      this.roleService.addRole(this.roleForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("successfullly data added!!");
      });

    }
  }

}




