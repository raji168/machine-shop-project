import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Machine } from 'src/app/models/machine.model';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {
  
  machine: Machine;

  machineForm: FormGroup;

  dataMachine: Machine[] = [];

  _id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machine: Machine },
    public dialogRef: MatDialogRef<AddMachineComponent>,
    private machineApi: MachineApiService,
    private alert:AlertService) {


    this.machineForm = new FormGroup({
      sno: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
      machinename: new FormControl(null, Validators.required),
      machineno: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {

    this.machine = this.data?.machine;

    this.machineApi.getMachineAll().subscribe(data => {
      this.dataMachine = data;
    });

    if (this.data.machine) {
      this.machineForm.patchValue(this.data.machine);
    }
  }

  onSave() {

    if (this.machine) {
      this.machineApi.updateMachine(this.machineForm.value, this.machine._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Data Updated Suceessfully...!', 'Machine');
      });
    } else {
      this.machineApi.addMachine(this.machineForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Data Added Suceessfully...!','Machine');
      });

    }
  }

}

