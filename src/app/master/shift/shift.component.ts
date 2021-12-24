import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AddShiftComponent } from './add-shift/add-shift.component';



const ELEMENT_DATA: Shift[] = [];

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  shift!: Shift;

  dataSource: Shift[] = [];

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
      this.dataSource = data;
      this.toastr.success('Shift Records Loaded Successfully', 'Shift');
    });

  }

  onClickAdd() {

    let dialogRef = this.dialog.open(AddShiftComponent);
  }

  onEdit(shift:Shift) {

    let dialogRef = this.dialog.open(AddShiftComponent);
  }

  onDelete(shift:Shift) {
    this.shiftAPi.deleteShift(this.shift.id);
  }
}
