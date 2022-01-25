import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/models/product.model';
import { Machine } from 'src/app/models/machine.model';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddProductComponent implements OnInit {

  customerData: Customer[] = [];
  productData: Product[] = [];
  machineData: Machine[] = [];

  addForm: FormGroup;
  processForm: FormGroup;
  
  
  constructor(
    private customerApi: CustomerApiService,
    private alert:AlertService,
    private fb: FormBuilder
  ) {

    this.addForm = this.fb.group({
      customerName: ['',Validators.required],
      productName: ['',Validators.required],
    })

    this.processForm = this.fb.group({
       
   
    })

  }

  ngOnInit(): void {

    this.customerApi.getCustomerAll().subscribe(result => {
      this.customerData = result;
    })


  }

  onProductSave() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Customer ");

  }

  onProcessDetail() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Process ");

  }

}
