import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';
import { Observable, Subject } from 'rxjs';
import { UserDataService } from 'src/app/data-services/user-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  displayedColumns: string[] = ['sno', 'name', 'role', 'emailId', 'phoneNo', 'userName', 'actions'];

  searchKey: string;

  userForm: FormGroup = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    role: new FormControl(''),
    emailId: new FormControl(''),
    phoneNo: new FormControl(''),
    userName: new FormControl('')
  });

  userDataSource$ : Observable<MatTableDataSource<User>>;

  constructor(
    public userService: UserApiService,
    private userDataService: UserDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogsService: DialogsService) {

  }

  
  ngOnInit() {
    this.userDataSource$ = this.userDataService.userUpdated$.pipe(map(users => {
      return new MatTableDataSource(users)
    }))
    
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  onEdit(user: User) {
    this.dialog.open(AddUserComponent, { data: { user } });
  }

  onDelete(id) {
    this.dialogsService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(id).subscribe(res => {
            this.notification.success('deleted successfully!!!');
          })
        }
      });
  }

  // applyFilter(){
  //   this.userData.filter = this.searchKey.trim().toLocaleLowerCase();
  // }

  // onSearchClear(){
  //   this.searchKey = "";
  //   this.applyFilter();
  // }

}






