import { HttpClient } from '@angular/common/http';
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

  selectedFile :File ;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerApi: CustomerApiService,
    private alert: AlertService,
    private http:HttpClient) {

    this.customerForm = new FormGroup({
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

  // onFileChanged(event){
  //   // const file = event.target.files;
  // }

  // onUpload(){
  //   // const uploadData = new FormData();
  //   // uploadData.append('myFile', this.selectedFile , this.selectedFile.name);
  // }
  onSave() {

    if (this.customer) {
      this.customerApi.updateCustomer(this.customerForm.value, this.customer._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Customer Updated Successfully...!', 'Customer');
      });
      
    } else {
      this.customerApi.addCustomer(this.customerForm.value).subscribe(data => {
        this.dialogRef.close(data);

        this.alert.showSuccess('Customer Added Successfully...!', 'Customer');

      });

    }
  }

}
