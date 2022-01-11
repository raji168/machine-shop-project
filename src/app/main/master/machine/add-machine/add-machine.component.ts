import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  machineData: Machine[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machine: Machine },
    public dialogRef: MatDialogRef<AddMachineComponent>,
    private machineApi: MachineApiService,
    private alert: AlertService,
    private fb:FormBuilder) {


    this.machineForm = this.fb.group({
      machinename: '',
      machineno: '',
      brand: '',
      category:''
    });

  }

  ngOnInit() {

    this.machine = this.data?.machine;

    if (this.machine) {
      this.machineForm.patchValue(this.machine);
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
        this.dialogRef.close(data);
        this.alert.showSuccess('Machine Added Successfully...!', 'Machine');
      });

    }
  }

}
