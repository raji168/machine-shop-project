import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';



const ELEMENT_DATA: Shift[] = [];

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  shift: Shift;

  dataShift: Shift[] = [];

  displayedColumns: string[] = ['sno', 'shiftName', 'startTime', 'endTime', 'actions'];

  constructor(
    private shiftAPi: ShiftApiService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {

    this.shiftAPi.getShiftAll().subscribe(data => {
      this.dataShift = data;
      this.toastr.success('Shift Records Loaded Successfully', 'Shift');
    });

  }

  onClickAdd() {

    this.dialog.open(AddShiftComponent);


  }

  onEdit(shift) {
    this.dialog.open(EditShiftComponent, { data: { shift } });

  }

  onDelete(id: string) {
    this.shiftAPi.deleteShift(id).subscribe(res => {
      this.dataShift = this.dataShift.filter(item => item._id !== id);
      console.log('shift deleted Suceessfully');
    })
  }
}
