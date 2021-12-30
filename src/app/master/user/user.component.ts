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

  displayedColumns: string[] = ['sno','name','role','emailId','phoneNo','userName','actions'];
  
  constructor(
    public userApi: UserApiService,
    private router: Router,
    private dialog:MatDialog,
    private notification: NotificationService){
      
    }

  @ViewChild(MatTable)
  table!: MatTable<User>;

  ngOnInit(){

    this.userApi.getUserAll().subscribe(data => {
      this.dataUser = data;
    });
      
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddUserComponent, dialogConfig);
  }
}

  

  


