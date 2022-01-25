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
  selector: 'app-add-mapping',
  templateUrl: './add-mapping.component.html',
  styleUrls: ['./add-mapping.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddMappingComponent implements OnInit {

  customerData: Customer[] = [];
  productData: Product[] = [];
  machineData: Machine[] = [];

  addForm: FormGroup;
  processForm: FormGroup;
  detailForm: FormGroup;
  machineForm: FormGroup;
  
  constructor(
    private customerApi: CustomerApiService,
    private machineApi: MachineApiService,
    private productApi: ProductApiService,
    private alert:AlertService,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      customerName: ['',Validators.required],
      productName: ['',Validators.required],
      drawingNo: ['',Validators.required],
      revisionNo: ['',Validators.required]
    })

    this.processForm = this.fb.group({
      processName: ['',Validators.required],
      processDrawing: ['',Validators.required]
    })

    this.detailForm = this.fb.group({
      productName: ['',Validators.required],
      productDrawing: ['',Validators.required],
      processName: ['',Validators.required],
      numberOfProcess: ['',Validators.required],
      processDrawing: ['',Validators.required]
    })

    this.machineForm = this.fb.group({
      processName: ['',Validators.required],
      machineName: ['',Validators.required]

    })

  }

  ngOnInit(): void {

    this.customerApi.getCustomerAll().subscribe(result => {
      this.customerData = result;
    })

    this.productApi.get().subscribe(result => {
      this.productData = result;
    })

    this.machineApi.getMachineAll().subscribe(result => {
      this.machineData = result;
    })


  }

  onProductSave() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Customer ");

  }

  onProcessSave() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Process ");

  }

  onProductDetail() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Product ");

  }

  onMachineMapping() {
    console.log(this.addForm.value);
    this.alert.showSuccess("Data Saved Suceessfully "," Machine  ");

  }

  onclickSaved(){
    this.alert.showSuccess("Machine Mapping Suceessfully "," Machine  ");
  }

}
