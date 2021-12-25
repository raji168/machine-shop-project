import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';



@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {
  shift :Shift ;
  shiftForm: FormGroup;

  dataShift: Shift[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shift },
    public dialogRef: MatDialogRef<EditShiftComponent>,
    private shiftApi: ShiftApiService,
  ) {
   
  }

  ngOnInit() {

    this.shiftApi.getShiftAll().subscribe(data => {
      this.dataShift = data;
    });


    this.shiftForm = new FormGroup({
      sno: new FormControl(null, Validators.required),
      shiftName: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required)
    });


    if(this.data.shift){
      this.shiftForm.patchValue(this.data.shift);
      this.shiftForm.get(this.shift._id).setValue(this.data.shift);
    }

  }



  onUpdate(shift) {
    console.log(this.shiftForm.value);

    if (shift._id === 0){
      this.shiftApi.editShift(shift).subscribe(res =>{
        shift._id ;
      });
    }



  
  }
}

