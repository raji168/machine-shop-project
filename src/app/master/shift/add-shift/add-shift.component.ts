import { Component, OnInit, Inject } from '@angular/core';
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


  shiftForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shift: Shift },
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

  }

  onSave() {
    console.log(this.shiftForm.value);

    this.shiftApi.addShift(this.shiftForm.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.toastr.success('Shift Records Added Successfully', 'Shift');
    })

  }
}
