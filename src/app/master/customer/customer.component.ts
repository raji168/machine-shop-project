import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dataSource: Customer[] = [];

  displayedColumns: string[] = ['sno', 'customername', 'description', 'productno', 'revisionno', 'drawing'];

  constructor(private customerApi: CustomerApiService,
    private router: Router,
    private dialog:MatDialog) { }

  ngOnInit() {

    this.customerApi.getCustomerAll().subscribe(data => {
      this.dataSource = data;
    })

  }

  onClickAdd(){
    let dialogRef = this.dialog.open(AddCustomerComponent);
  }

  onClickEdit(){

  }

  onClickDelete(){
    
  }

}
