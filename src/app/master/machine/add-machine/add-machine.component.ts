import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Machine } from 'src/app/models/machine.model';
import { MachineApiService } from 'src/app/services/machine-api.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {

  machineForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machine: Machine },
    public dialogRef: MatDialogRef<AddMachineComponent>,
    private machineApi: MachineApiService,
    private toastr: ToastrService) {


    this.machineForm = new FormGroup({
      sno: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
      machinename: new FormControl(null, Validators.required),
      machineno: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onSave() {

    console.log(this.machineForm.value);

    this.machineApi.addMachine(this.machineForm.value).subscribe(data => {
      this.dialogRef.close(data);
      this.toastr.success('Machine Records Added Successfully', 'Machine');
    })

  }

}
