<<<<<<< HEAD
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// import { MatHorizontalStepper } from '@angular/material';
=======
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AlertService } from 'src/app/shared/alert.service';

>>>>>>> 659ad96515dfe9796bee879afa0ca74cb07a19c6
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

<<<<<<< HEAD
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
 
  ngOnInit(): void {
=======
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

>>>>>>> 659ad96515dfe9796bee879afa0ca74cb07a19c6
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
