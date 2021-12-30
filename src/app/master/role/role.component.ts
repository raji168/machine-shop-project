import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';


// const ELEMENT_DATA: Role[] = [];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddRoleComponent, dialogConfig);
  }

  onEdit(id){
    let dialogRef = this.dialog.open(AddRoleComponent);
  }

  onDelete(id){
    this.roleService.deleteRole(id).subscribe(res =>{
      this.dataRole = this.dataRole.filter(item => item._id !== id);
      this.notification.success('role deleted Suceessfully');
    })
  }

  ngOnInit(){

    this.roleService.getreFreshAll()
    .subscribe(() =>{
      this.onGet();
    })
    this.onGet();

    // this.roleService.getRoleAll().subscribe(data => {
    //   this.dataRole = data;
    // });

  }

 onGet(){
  this.roleService.getRoleAll().subscribe(data => {
    this.dataRole = data;
  });
 }

}
