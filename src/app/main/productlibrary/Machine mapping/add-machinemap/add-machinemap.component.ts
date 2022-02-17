import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from 'querystring';
import { Machine } from 'src/app/models/machine.model';
import { MachineMapping } from 'src/app/models/machinemapping.model';
import { Product } from 'src/app/models/product.model';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { MachineMappingApiService } from 'src/app/services/machinemapping-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-add-machinemap',
  templateUrl: './add-machinemap.component.html',
  styleUrls: ['./add-machinemap.component.scss']
})
export class AddMachinemapComponent implements OnInit {
  mapping : MachineMapping;
  form: FormGroup;
  productData : Product[] =[];
  machineData : Machine [] = [];
  processData : any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mapping : MachineMapping },
    public productService : ProductApiService,
    public machineService : MachineApiService,
    public machinemapService : MachineMappingApiService,
    public dialogRef: MatDialogRef<AddMachinemapComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
      
      this.form = this.fb.group({
        product: this.productData,
        process : new FormControl({ value: '', disabled: true}),
        machine:this.machineData
      })

  }

  ngOnInit() {
    
    this.productService.get().subscribe(data => {
      this.productData = data;
    })
    this.machineService.getMachineAll().subscribe(data => {
      this.machineData = data;
    })
   
    this.mapping = this.data?.mapping;

    if (this.mapping) {
      this.form.patchValue(this.mapping);
      this.form.get('product').setValue(this.data.mapping.product._id);
      this.form.get('machine').setValue(this.data.mapping.machine._id); 
      // this.form.get('product.process')?.setValue(this.data.mapping.process._id);
    }
  }
  onProductChange(event) {
    this.getProduct(event.value)
    if(event.value = ''){
      this.form.get('process').disable();
    }else {
      this.form.get('process').enable();
    }
  }

  getProduct(productId) {
    const selectedProductData = this.productData.filter(product => product._id === productId);
    this.processData = selectedProductData[0].process;
  }
  
  onSubmit() {
    // console.log(this.form.value);
    if (this.mapping) {
      this.machinemapService.updateMachineMap(this.form.value, this.mapping.id).subscribe(data => {
        this.dialogRef.close(data);
        // console.log(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.machinemapService.addMachineMap(this.form.value).subscribe(data => {
        this.dialogRef.close(data);
        console.log(data);
        this.notification.success("Added successfully!!");
      });
    }
}
}












// onProductChange({productName}) {
//   this.productData = this.getProduct(this.product.value);
//   console.log("product" + this.productData.values)
//   this.product= event.target.value;
//   console.log(this.product)
//   if(this.id === this.product.id){
//     console.log(event.target.value )
//   }
  
//   let dropDownData = this.productData.find(data => data.productName === event);
//   if (dropDownData) {
//     this.process = dropDownData.process;
//     if(this.process){
//       this.process=this.process[0];
//     }
    
//   } else {
//     this.process = [];
//   }
//   console.log(dropDownData)
//   if (productName === '') {
//     this.form.get('operationName').disable();
//   } else {
//     this.form.get('operationName').enable();
//   }
// }

// getProduct(productId){
//     return this.productData.filter(product => product._id === productId);
// }