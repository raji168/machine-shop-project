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
}