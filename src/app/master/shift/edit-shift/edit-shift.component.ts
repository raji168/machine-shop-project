import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditShiftComponent>,
    private router: Router,
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


    if(this.data){
      this.shiftForm.patchValue(this.shift);
    }

  }



  onUpdate() {
    console.log(this.shiftForm.value);

  // this.shiftApi.updateShift(this.shiftForm.value , this.data.id).subscribe(data =>{
  //   this.dataShift = this.dataShift.filter(item => item._id !== id);
  //     this.dialogRef.close(data);
  //   })

  }
}

