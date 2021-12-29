import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  dataCustomer: Customer[] = [];

  customerDataSource ;

  displayedColumns: string[] = ['sno', 'customername', 'description', 'productno', 'revisionno', 'drawing' ,'actions'];

  // @ViewChild('paginator' , {read : MatPaginator , static: false}) paginator:MatPaginator; 
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerApi: CustomerApiService,
    private router: Router,
    private dialog:MatDialog) { }

  ngOnInit() {

    this.customerApi.getCustomerAll().subscribe(data => {
      this.dataCustomer = data;
      this.customerDataSource = new MatTableDataSource(this.dataCustomer);
      this.customerDataSource.paginator = this.paginator ;
      this.customerDataSource.sort = this.sort
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customerDataSource.filter = filterValue.trim().toLowerCase();
  }

  pageEvent(event:any){
    let result = confirm('Your changes will be lost . Do you want to continue ?');
  }
  onClickAdd(){
    let dialogRef = this.dialog.open(AddCustomerComponent);
  }

  onClickEdit(){

  }

  onClickDelete(id:string){
    this.customerApi.deleteCustomer(id).subscribe(res =>{
      this.dataCustomer= this.dataCustomer.filter(item => item._id !== id);
      console.log('Machine deleted Suceessfully');
    })
    
  }



}
