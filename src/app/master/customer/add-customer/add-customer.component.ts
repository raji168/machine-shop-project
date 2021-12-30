import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service'
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  isEditable: boolean = false;

  customer: Customer;

  customerForm: FormGroup;

  dataMachine: Customer[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerApi: CustomerApiService,
    private alert: AlertService) {

    this.customerForm = new FormGroup({
      sno: new FormControl(null, Validators.required),
      customername: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      productno: new FormControl(null, Validators.required),
      revisionno: new FormControl(null, Validators.required),
      drawing: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.customer = this.data?.customer;

    this.customerApi.getCustomerAll().subscribe(data => {
      this.dataMachine = data;
    });

    if (this.customer) {
      this.customerForm.patchValue(this.data.customer);
    }
  }

  onSave() {

    if (this.customer) {
      this.customerApi.updateCustomer(this.customerForm.value, this.customer._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Data Updated Suceessfully...!','Customer');
      });
    } else {
      this.customerApi.addCustomer(this.customerForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Data Added Suceessfully...!','Customer');
      });

    }
  }

}
