import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormControl, FormGroup, Validators } from '@angular/forms';
>>>>>>> c8237b82e5c4684718671d6b9accac54dddd1e31

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
  ngOnInit(): void {
   
    
  }

  // shift: Shift;

  // shiftForm: FormGroup;

  // constructor() { public dialogRef: MatDialogRef<AddShiftComponent>,
  //   private shiftApi: ShiftApiService,
  //   private toastr: ToastrService }



  //   this.shiftForm = new FormGroup({
  //     sno: new FormControl(null, [Validators.required, Validators.maxLength(1)]),
  //     shiftName: new FormControl(null, Validators.required),
  //     startTime: new FormControl(null, Validators.required),
  //     endTime: new FormControl(null, Validators.required)
  //   });

  // }

  // ngOnInit(): void {
  // }

  
  // onSave() {
  //   console.log(this.shiftForm.value);
  //   this.shiftApi.addShift(this.shiftForm.value).subscribe((data) => {
  //     this.dialogRef.close(data);
  //     this.toastr.success('Shift Records Added Successfully', 'Shift');
  //   })


  // }
>>>>>>> c8237b82e5c4684718671d6b9accac54dddd1e31
}
