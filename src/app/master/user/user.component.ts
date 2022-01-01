import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: User[] = [];

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['sno','name','role','emailId','phoneNo','userName','actions'];
  
  constructor(
    public userService: UserApiService,
    private dialog:MatDialog,
    private notification: NotificationService,
    private dialogsService: DialogsService){
      
    }

    searchKey: string;

  ngOnInit(){
    this.userService.getreFreshAll()
    .subscribe(() =>{
      this.getData();
    })

    this.getData();
  }
  getData(){
    this.userService.getUserAll().subscribe(data => {
      this.userData = data;
      this.listData = new MatTableDataSource(data);

    });
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  onEdit(user: User){
    this.dialog.open(AddUserComponent , {data : {user}});
  }

  onDelete(id){
    this.dialogsService.openConfirmDialog('Are you sure to delete this record?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.userService.deleteUser(id).subscribe(res =>{
          this.userData = this.userData.filter(item => item._id !== id);
          this.ngOnInit();
          this.notification.success('deleted successfully!!!!');
        })
      }
    })
  }
}

  

  


