import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/data-services/user-data.service';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  displayedColumns: string[] = ['select', 'sno', 'name', 'role', 'emailId', 'phoneNo', 'userName', 'actions'];

  users: User[] = [];

  searchKey: string;

  userData = new MatTableDataSource<User>();

  isSelected: boolean;
 
  // userForm: FormGroup = new FormGroup({
  //   sno: new FormControl(''),
  //   name: new FormControl(''),
  //   role: new FormControl(''),
  //   emailId: new FormControl(''),
  //   phoneNo: new FormControl(''),
  //   userName: new FormControl('')
  // });

  userDataSource$: Observable<MatTableDataSource<User>>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public userService: UserApiService,
    private userDataService: UserDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogsService: DialogsService) {

  }


  ngOnInit(): void {

    this.userDataSource$ = this.userDataService.userUpdated$.pipe(map(users => {
      return new MatTableDataSource(users)
    }))
    this.userDataSource$.subscribe((res) => {
      // this.userData = res.data;
      this.userData = new MatTableDataSource(res.data);
      this.userData.paginator = this.paginator;
      this.userData.sort = this.sort;
    })

  }
  ngAfterViewInit(): void {
    this.userData.paginator = this.paginator;
    this.userData.sort = this.sort;
  }

  applyFilter() {
    this.userData.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
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


  onDelete(id: string) {

    this.dialogsService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(id).subscribe(res => {
            this.notification.success('deleted successfully!!!');
          })
        }
      });
  }

  removeSelected() {
    const ausers = this.userData.data.filter((u: User) => u.isSelected);
    this.dialogsService.openConfirmDialog('Are you sure to delete this selected records  ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteSelectUser(ausers).subscribe(res => {
            this.userData.data = this.userData.data.filter((u: User) => !u.isSelected);
            this.notification.success('Users deleted successfully!!!');
          })
        }
      });
  }
}







