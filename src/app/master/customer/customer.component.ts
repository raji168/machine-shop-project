import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomerDataService } from 'src/app/data-services/customer-data.service';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { DialogsService } from 'src/app/services/dialogs.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerData: Customer[] = [];

  customerDataSource;

  destroy$ = new Subject();

  displayedColumns: string[] = ['sno', 'customername', 'description', 'productno', 'revisionno', 'drawing', 'actions'];

  // @ViewChild('paginator' , {read : MatPaginator , static: false}) paginator:MatPaginator; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customerApi: CustomerApiService,
    private customerDataService: CustomerDataService,
    private router: Router,
    private dialog: MatDialog,
    private dialogsService: DialogsService,
    private alert: AlertService) { }

  ngOnInit(): void {

    this.customerData = this.customerDataService.getCustomer()
    this.customerDataService.customerUpdated$.pipe(takeUntil(this.destroy$)).subscribe(customer => {
      this.customerData = customer
    })

  }

  customerFill() {

    this.customerDataSource = new MatTableDataSource(this.customerData);
    this.customerDataSource.paginator = this.paginator;
    this.customerDataSource.sort = this.sort

  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.customerDataSource.filter = filterValue.trim().toLowerCase();

  }

  onClickAdd() {

    this.dialog.open(AddCustomerComponent);

  }

  onClickEdit(customer: Customer) {

    this.dialog.open(AddCustomerComponent, { data: { customer } });

  }

  onClickDelete(id: string) {

    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.customerApi.deleteCustomer(id).subscribe(res => {
            this.customerData = this.customerData.filter(item => item._id !== id);
            this.alert.showError('Customer Deleted Successfully...!', 'Customer');
          })
        }
      });

  }


}
