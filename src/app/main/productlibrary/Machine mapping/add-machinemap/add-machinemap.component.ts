import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  machinemapping : MachineMapping;
  form: FormGroup;
  productData : Product[] =[];
  machineData : Machine [] = [];
  processData : any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machinemapping : MachineMapping },
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
   
    this.machinemapping = this.data?.machinemapping;
    if (this.machinemapping) {
      this.form.patchValue(this.data.machinemapping);
      // this.form.get('product')?.setValue(this.data.machinemapping.product._id);
      // this.form.get('machine')?.setValue(this.data.machinemapping.machine._id); 
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
    if (this.machinemapping) {
      this.machinemapService.updateMachineMap(this.form.value, this.machinemapping._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.machinemapService.addMachineMap(this.form.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Added successfully!!");
      });
    }
}
}