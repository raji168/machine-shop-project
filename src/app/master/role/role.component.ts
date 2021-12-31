import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';
import { DialogsService } from 'src/app/services/dialogs.service';


// const ELEMENT_DATA: Role[] = [];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roleData: Role[] = [];

  displayedColumns: string[] = ['serialno', 'name', 'actions'];
  

  constructor(
    private roleService:RoleApiService,
    private router: Router,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService:DialogsService) {   
  }

  // @ViewChild(MatTable)
  // table!: MatTable<Role>;



  ngOnInit() : void {
    // this.roleService.getRoleAll().subscribe(data => {
    //   this.roleData = data;
    // });
    this.roleService.getreFreshAll()
    .subscribe(() =>{
      this.getData();
    })

    this.getData();
  }
  getData(){
    this.roleService.getRoleAll().subscribe(data => {
      this.roleData = data;
    });

  }
 
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    this.dialog.open(AddRoleComponent, dialogConfig);
  }

  onEdit(role: Role){
    this.dialog.open(AddRoleComponent , { data : { role } });
  }

  onDelete(id){ 
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      // console.log(res);
      if(res){
         this.roleService.deleteRole(id).subscribe(res =>{
            this.roleData = this.roleData.filter(item=>item._id!==id);
            this.ngOnInit();
            this.notification.success(' deleted Suceessfully');
          })
      }
    });
  }

}
