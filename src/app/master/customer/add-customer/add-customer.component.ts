import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    private customerApi: CustomerApiService) {

    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      product: new FormControl(null, Validators.required),
      partno: new FormControl(null, Validators.required),
      revno: new FormControl(null, Validators.required),
      drawing: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

}
