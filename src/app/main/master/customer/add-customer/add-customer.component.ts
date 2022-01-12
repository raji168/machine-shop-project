import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  customer: Customer;

  customerForm: FormGroup;

  dataMachine: Customer[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerApi: CustomerApiService,
    private alert: AlertService,
    private fb:FormBuilder) {

    this.customerForm = this.fb.group({
      customername: '',
      description: '',
      productno: '',
      revisionno: '',
      drawing: ''
    });
  }

  ngOnInit() {
    this.customer = this.data?.customer;

    if (this.customer) {
      this.customerForm.patchValue(this.customer);
    }
  }
  
  onSelectedFile(event){
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.customerForm.get('drawing').setValue(file);
    }

  }

  onSave() {

    if (this.customer) {
      this.customerApi.updateCustomer(this.customerForm.value, this.customer._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Customer Updated Successfully...!', 'Customer');
      });
      
    } else {
      this.customerApi.addCustomer(this.customerForm.value).subscribe(data => {
        this.dialogRef.close(data);
        const formData = new FormData();
        formData.append('drawing', this.customerForm.get('drawing').value);
        this.alert.showSuccess('Customer Added Successfully...!', 'Customer');

      });

    }
  }

}
