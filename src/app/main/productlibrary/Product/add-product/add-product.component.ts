import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
  

  
  productForm: FormGroup;
  // processForm: FormGroup;


  constructor(
    private customerApi: CustomerApiService,
    private alert: AlertService,
    private fb: FormBuilder
  ) {
    // this.processForm = this.fb.group({
    //   name:['',Validators.required],
    //   drawing:['',Validators.required],
    //   jsirDoc:['',Validators.required],
    //   pmsDoc:['',Validators.required],
    //   pdirDoc:['',Validators.required],
    //   isirDoc:['',Validators.required]
    // })

  }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      customerName: ['', Validators.required],
      productName: ['', Validators.required],
      process:['']
    })

    // this.setDefaultData();
    this.customerApi.getCustomerAll().subscribe(result => {
      this.customerData = result;
    })


  }

    onAddProcess() {
      let processes = this.productForm.get('processes') as FormArray;
      processes.push(this.fb.group({
         name:['',Validators.required],
         drawing:['',Validators.required],
         jsirDoc:['',Validators.required],
         pmsDoc:['',Validators.required],
         pdirDoc:['',Validators.required],
         isirDoc:['',Validators.required]
      }));

   }


  onProductSave() {
    console.log('data of product ', this.productForm.value);
    this.alert.showSuccess("Data Saved Suceessfully ", " Product ");

  }


}
