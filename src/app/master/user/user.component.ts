import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';
import { Subject } from 'rxjs';
import { UserDataService } from 'src/app/data-services/user-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { RoleDataService } from 'src/app/data-services/role-data.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: User[] = [];

  displayedColumns: string[] = ['sno', 'name', 'role', 'emailId', 'phoneNo', 'userName', 'actions'];

  destroyed$ = new Subject();

  searchKey: string;

  constructor(
    public userService: UserApiService,
    private userDataService: UserDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogsService: DialogsService) {

  }

  userForm: FormGroup = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    role: new FormControl(''),
    emailId: new FormControl(''),
    phoneNo: new FormControl(''),
    userName: new FormControl('')
  })

  ngOnInit() {
    this.userData = this.userDataService.getUsers()
    this.userDataService.userUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(users => {
      this.userData = users
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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

  // applyFilter(){
  //   this.userData.filter = this.searchKey.trim().toLocaleLowerCase();
  // }

  // onSearchClear(){
  //   this.searchKey = "";
  //   this.applyFilter();
  // }

  onDelete(id) {
    this.dialogsService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(id).subscribe(res => {
            this.userData = this.userData.filter(item => item._id !== id);
            this.ngOnInit();
            this.notification.success('deleted successfully!!!!');
          })
        }
      })
  }
}






