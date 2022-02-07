import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class AddProductComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  customerData: Customer[] = [];
 

  
  // productForm: FormGroup;
  // processForm: FormGroup;


  // constructor(
  //   private customerApi: CustomerApiService,
  //   private alert: AlertService,
  //   private fb: FormBuilder
  // ) {
  //   this.processForm = this.fb.group({
  //     name:['',Validators.required],
  //     drawing:['',Validators.required],
  //     jsirDoc:['',Validators.required],
  //     pmsDoc:['',Validators.required],
  //     pdirDoc:['',Validators.required],
  //     isirDoc:['',Validators.required]
  //   })

  // }

  // ngOnInit(): void {

  //   this.productForm = this.fb.group({
  //     customerName: [''],
  //     productName: ['', Validators.required],
  constructor(private _formBuilder: FormBuilder,
    public customerService: CustomerApiService) {}

  ngOnInit(){
    this.customerService. getCustomerAll().subscribe(data => {
      this.customerData = data;
    })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    
  }

  //   onAddProcess() {
  //     let processes = this.productForm.get('processes') as FormArray;
  //     processes.push(this.fb.group({
  //        name:['',Validators.required],
  //        drawing:['',Validators.required],
  //        jsirDoc:['',Validators.required],
  //        pmsDoc:['',Validators.required],
  //        pdirDoc:['',Validators.required],
  //        isirDoc:['',Validators.required]
  //     }));

  //  }


  // onProductSave() {
  //   console.log('data of product ', this.productForm.value);
  //   this.alert.showSuccess("Data Saved Suceessfully ", " Product ");

  // }

  // onProcessSave(){
  //   console.log(this.processForm.value);
  // }


}

