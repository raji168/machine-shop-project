import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Role } from 'src/app/models/role.model';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleApiService } from 'src/app/services/role-api.service';
import { RoleActions } from 'src/app/store/actions/action-types';



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
    public notification: NotificationService,
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit(): void {

    this.roleForm = this.fb.group({
      name: ['',Validators.required],    
    });
    this.role = this.data?.role;
    if (this.role) {
      this.roleForm.patchValue(this.role);
    }

  }

  onSubmit() {
    if (this.role) {
      this.roleForm.disable();
      this.store.dispatch(RoleActions.updateRole({ role: this.roleForm.value, id :this.role._id, loadedState : true } ));
    } else {
      this.roleForm.disable();
      this.store.dispatch(RoleActions.addRole({role : this.roleForm.value}));

    }
  }

}




