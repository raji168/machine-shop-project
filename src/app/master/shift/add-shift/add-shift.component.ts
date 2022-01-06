import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {

  shift: Shift;

  shiftForm: FormGroup;

  destroyed$ = new Subject();

  shiftData: Shift[] = [];

  _id: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shift: Shift },
    public dialogRef: MatDialogRef<AddShiftComponent>,
    private shiftApi: ShiftApiService,
    private alert: AlertService
  ) {

    this.shiftForm = new FormGroup({
      sno: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      shiftName: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {

    this.shift = this.data?.shift;

    this.shiftApi.getShiftAll().subscribe(data => {
      this.shiftData = data;
    })

    if (this.shift) {
      this.shiftForm.patchValue(this.data.shift);
    }

  }

  onSave() {

    if (this.shift) {

      this.shiftApi.updateShift(this.shiftForm.value, this.shift._id).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Shift Updated Successfully...!', 'Shift');

      });

    } else {

      this.shiftApi.addShift(this.shiftForm.value).subscribe(data => {
        this.dialogRef.close(data);
        this.alert.showSuccess('Shift Added Successfully...!', 'Shift');

      });

    }
  }
}




