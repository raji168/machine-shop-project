import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';


const ELEMENT_DATA: Role[] = [];

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


  dataSource: Role[] = [];

  // displayedColumns: string[] = ['sno', 'shiftname', 'startTime', 'endTime'];

  displayedColumns: string[] = ['serialno', 'name'];
  table: any;

  constructor(
    private role:RoleApiService,
    private router: Router) { 
    
  }
  
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  ngOnInit(){

    this.role.getRoleAll().subscribe(data =>{
      this.dataSource = data;
    });
  
  }
}
