import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';


const ELEMENT_DATA: Role[] = [];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


  dataSource: Role[] = [];

  displayedColumns: string[] = ['serialno', 'name','edit','delete'];
  

  constructor(
    private role:RoleApiService,
    private router: Router,
    private dialog: MatDialog,
    private notification: NotificationService) { 
  }

  @ViewChild(MatTable)
  table!: MatTable<Role>;


  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddRoleComponent, dialogConfig);
  }

 

  ngOnInit(){
  
  }
}
