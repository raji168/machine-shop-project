import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {

  shift: Shift;

  shiftForm: FormGroup;

  dataShift: Shift[] = [];



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Shift,
    public dialogRef: MatDialogRef<AddShiftComponent>,
    private shiftApi: ShiftApiService,
    private toastr: ToastrService
  ) {

    this.shiftForm = new FormGroup({
      sno: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
      shiftName: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {

    this.shiftApi.getShiftAll().subscribe(data => {
      this.dataShift = data;
    });

    if (this.shift) {
      this.shiftForm.patchValue(this.shift);
    }


  }

  onSave() {
    this.shiftApi.addShift(this.shiftForm.value).subscribe(data => {
          this.dialogRef.close(data);
        });
        this.shiftForm.reset();
    // if (this.shift) {
    //   this.shiftApi.updateShift( this.shiftForm.value , this.shift._id).subscribe(res => {
    //     this.dialogRef.close(res);
    //   });
    // } else {
    //   this.shiftApi.addShift(this.shiftForm.value).subscribe(data => {
    //     this.dialogRef.close(data);
    //   });

    // }
  }


}


