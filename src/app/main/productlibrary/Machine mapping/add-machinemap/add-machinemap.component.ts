import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  mapping : MachineMapping;
  form: FormGroup;

  product;
  productData : Product[] =[];
  // processData : Process [] = [];
  machineData : Machine [] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mapping : MachineMapping },
    public productService : ProductApiService,
    public machineService : MachineApiService,
    public machinemapService : MachineMappingApiService,
    public dialogRef: MatDialogRef<AddMachinemapComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
      
      this.form = this.fb.group({
        product: '',
        // operationName : '',
        machine:''
      })

  }

  ngOnInit() {
    
    this.productService.get().subscribe(data => {
      this.productData = data;
      // console.log(this.productData);
    })
    this.machineService.getMachineAll().subscribe(data => {
      this.machineData = data;
      // console.log(this.machineData);
    })

    this.mapping = this.data?.mapping;

    if (this.mapping) {
      this.form.patchValue(this.data.mapping);
      this.form.get('product')?.setValue(this.data.mapping.product._id);
      this.form.get('machine')?.setValue(this.data.mapping.machine._id); 
      // this.form.get('product.process')?.setValue(this.data.mapping.process._id);
    }
  }

  onSelectionChanged(id:string) {
    const result = this.productData.filter(x => x._id === id);
    return result; 
  }
  // get product(){
  //   return this.form.get('name');
  // }
  // get process(){
  //   return this.form.get('operationName');
  // }


  onSubmit() {
    console.log(this.form.value);

    if (this.mapping) {
      this.machinemapService.updateMachineMap(this.form.value, this.mapping.id).subscribe(data => {
        this.dialogRef.close(data);
        console.log(data);
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
