import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Machine } from 'src/app/models/machine.model';
import { MachineMapping } from 'src/app/models/machinemapping.model';
import { Drawing, Process } from 'src/app/models/process.model';
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
  machinemap : MachineMapping
  form: FormGroup
  productData : Product[] =[];
  processData : Product[] =[];
  drawingData : Drawing[] = [];
  machineData : Machine [] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machinemap : MachineMapping },
    public productService : ProductApiService,
    public machineService : MachineApiService,
    public machinemapService : MachineMappingApiService,
    public dialogRef: MatDialogRef<AddMachinemapComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        name: "",
        processName : "",
        drawingNo: "",
        machine:""
      })

  }

  ngOnInit(): void {
    this.productService.get().subscribe(data => {
      this.productData = data;
      console.log(this.productData);
    })
    this.machineService.getMachineAll().subscribe(data => {
      this.machineData = data;
    })

    this.machinemap = this.data?.machinemap;

    if (this.machinemap) {
      this.form.patchValue(this.data.machinemap);
      this.form.get('product')?.setValue(this.data.machinemap.productName);
    }

  }

  onSubmit() {

    if (this.machinemap) {
      this.machinemapService.updateMachineMap(this.form.value, this.machinemap.id).subscribe(data => {
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
