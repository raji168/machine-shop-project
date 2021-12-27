import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';
=======
>>>>>>> 96550ddca0afd725c382158e4e3863da048be928

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  roleForm: FormGroup;

  constructor(
    public roleService : RoleApiService,
    public dialogRef: MatDialogRef<AddRoleComponent>,
    public notification : NotificationService) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onClear(){
    this.roleService.roleForm.reset();
    this.roleService.initializeFormGroup();
  }

  onSave(){
    console.log(this.roleService.roleForm.value);
    this.roleService.addRole(this.roleService.roleForm.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.notification.success("successfullly data added!!");
    })
  } 
    
=======
>>>>>>> 96550ddca0afd725c382158e4e3863da048be928

}
