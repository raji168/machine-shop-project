import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';




const userData: User[] = [
  // {name: 'AAAA',role: 'manager', email:'aaa@gmail.com', contactNo: 754565655, userName:'aaaa' ,edit:'',delete:''},
  // {name: 'BBBB',role: 'manager', email:'aaa@gmail.com', contactNo: 754565655, userName:'aaaa' ,edit:'',delete:''},
  // {name: 'cccc',role: 'manager', email:'aaa@gmail.com', contactNo: 754565655, userName:'aaaa' ,edit:'',delete:''},
  // {name: 'dddd', role: 'manager', email:'aaa@gmail.com', contactNo: 754565655, userName:'aaaa' ,edit:'',delete:''},
  // {name: 'eeee',role: 'manager', email:'aaa@gmail.com', contactNo: 754565655, userName:'aaaa' ,edit:'',delete:''},
];


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataUser: User[] = [];

  displayedColumns: string[] = ['serialNo','name','role','email','contactNo','userName','edit','delete'];
  
  constructor(
    private userApi: UserApiService,
    private router: Router,
    private dialog:MatDialog,
    private notification: NotificationService){
      
    }

  @ViewChild(MatTable)
  table!: MatTable<User>;

  ngOnInit(): void {
      
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  

  // removeData() {
  //   this.dataUser.pop();
  //   this.table.renderRows();
  // }

}


// constructor(private _service:DepartmentService ,
//   public _notification: NotificationService,
//   public _dialog: MatDialog ) { }

// grdlistData: MatTableDataSource<any>;
// displayedColumns: string[] = ['serialno','name','actions']
// @ViewChild(MatSort) sort: MatSort;
// @ViewChild(MatPaginator) paginator: MatPaginator;
// searchKey: string;


// ngOnInit(): void {
//   this.fillGrid();
// }

// fillGrid() {
//   this._service.getAlldepartment()
//     .subscribe(
//         data => {
//           this.grdlistData = new MatTableDataSource(data);
//           this.grdlistData.sort = this.sort;
//           this.grdlistData.paginator = this.paginator;
//         }
//     );
// }

// applyFilter(){
//   this.grdlistData.filter = this.searchKey.trim().toLowerCase();
// }

// onSearchClear(){
//   this.searchKey = " ";
//   this.applyFilter();
// }

// onCreate( ){
//   // this._service.getDepartmentMaxSerialNo()
//   //   .subscribe(
//   //     data =>{
//   //       this._service.maxSerialNo = data;
//   //       this._service.initializeFormGroup();
//   //     }
//   //   );

//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose =true;
//   dialogConfig.autoFocus = true;
//   dialogConfig.width = "30%";
//   this._dialog.open(DepartmentComponent, dialogConfig);
// }

// onEdit(){
//   this._notification.success("you clicked Edit !");
// }

// onDelete(){
//   this._notification.warn("you clicked Delete !");
// }