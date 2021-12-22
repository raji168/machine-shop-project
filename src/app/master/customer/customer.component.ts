import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dataSource: Customer[] = [];

  displayedColumns: string[] = ['sno', 'name', 'product', 'partno', 'revno', 'drawing'];

  constructor(private customerApi: CustomerApiService,
    private router: Router) { }

  ngOnInit() {

    this.customerApi.getCustomerAll().subscribe(data => {
      this.dataSource = data;
    })

  }

}
