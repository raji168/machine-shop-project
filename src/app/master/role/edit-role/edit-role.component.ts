import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  roleForm: FormGroup;

  constructor(
    public roleService : RoleApiService,
    public dialogRef: MatDialogRef<EditRoleComponent>,
    public notification : NotificationService,
    public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.roleService.getRoleById(this)
      .subscribe((data : any)=>{
        this.roleService.initializeFormGroup();
      });
  }

  onClear(){
    this.roleService.roleForm.reset();
    this.roleService.initializeFormGroup();
  }

  onUpdate(){
    console.log(this.roleService.roleForm.value);
  } 
    

}
