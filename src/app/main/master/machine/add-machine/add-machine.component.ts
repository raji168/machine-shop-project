import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MachineCategory } from 'src/app/models/machine-category.model';
import { Machine } from 'src/app/models/machine.model';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { MachineCategoryApiService } from 'src/app/services/machinecategory-api.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {

  machine: Machine;
  machineForm: FormGroup;
  machineData: Machine[] = [];
  machineCategoryData: MachineCategory[]=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machine: Machine },
    public dialogRef: MatDialogRef<AddMachineComponent>,
    private machineCategoryService:MachineCategoryApiService,
    private machineApi: MachineApiService,
    private alert: AlertService,
    private fb:FormBuilder) {


    this.machineForm = this.fb.group({
      machinename: ['',Validators.required],
      machineno: ['',Validators.maxLength(5)],
      brand: ['',Validators.required],
      machinecategory:['',Validators.required],
    });

  }

  ngOnInit() {
    this.machineCategoryService.get().subscribe(data =>{
      this.machineCategoryData = data;
      console.log(this.machineCategoryData)
    })
    this.machine = this.data?.machine;
    console.log(this.machine)
    if (this.machine) {
      this.machineForm.patchValue(this.data.machine);
      this.machineForm.get('machineCategory')?.setValue(this.data.machine.machinecategory._id)
    }
  }

  onSave() {
    if (this.machine) {
      this.machineApi.updateMachine(this.machineForm.value, this.machine._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Machine Updated Successfully...!', 'Machine');

      });
      
    } else {
      this.machineApi.addMachine(this.machineForm.value).subscribe(data => {
        console.log(data);
        this.dialogRef.close(data);
        this.alert.showSuccess('Machine Added Successfully...!', 'Machine');
      });

    }
  }

}

