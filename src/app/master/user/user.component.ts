import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserApiService } from 'src/app/services/user-api.service';

const ELEMENT_DATA: User[] = [
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
  
  constructor(private shiftAPi: UserApiService,
    private router: Router,){
      
    }

  @ViewChild(MatTable)
  table!: MatTable<User>;

  ngOnInit(): void {
      
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataUser.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataUser.pop();
    this.table.renderRows();
  }

}
