import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';


// const ELEMENT_DATA: Role[] = [];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

 role :Role;
  dataRole: Role[] = [];

  displayedColumns: string[] = ['serialno', 'name', 'actions'];
  

  constructor(
    private roleService:RoleApiService,
    private router: Router,
    private dialog: MatDialog,
    private notification: NotificationService) {   
  }

  // @ViewChild(MatTable)
  // table!: MatTable<Role>;


  onCreate(){
    this.roleService.getRoleMaxSerialno()
      .subscribe(
        data =>{
          this.roleService.maxSerialno = data;
          this.roleService.initializeFormGroup();
        }
      );
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddRoleComponent, dialogConfig);
  }

  onEdit(id){
    let dialogRef = this.dialog.open(EditRoleComponent);
  }

  onDelete(id){
    this.roleService.deleteRole(id).subscribe(res =>{
      this.dataRole = this.dataRole.filter(item => item._id !== id);
      this.notification.success('shift deleted Suceessfully');
    })
  }

  ngOnInit(){
  
    this.roleService.getRoleAll().subscribe(data => {
      this.dataRole = data;
    });

  }
}
