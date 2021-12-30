import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shift } from 'src/app/models/shift.model';
import { DialogService } from 'src/app/services/dialog.service';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AddShiftComponent } from './add-shift/add-shift.component';



const ELEMENT_DATA: Shift[] = [];

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  dataShift: Shift[] = [];

  shiftDataSource;

  displayedColumns: string[] = ['sno', 'shiftName', 'startTime', 'endTime', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private shiftApi: ShiftApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private dialogService:DialogService
  ) {

  }

  ngOnInit() {

    this.shiftApi.getShiftAll().subscribe(data => {
      this.dataShift = data;
      this.shiftDataSource = new MatTableDataSource(this.dataShift);
      this.shiftDataSource.paginator = this.paginator;
      this.shiftDataSource.sort = this.sort;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shiftDataSource.filter = filterValue.trim().toLowerCase();
  }


  onClickAdd() {

    this.dialog.open(AddShiftComponent);


  }


  onClickEdit(shift:Shift){
    this.dialog.open(AddShiftComponent , { data: { shift } });
  }


  onClickDelete(id: string) {
    
    this.shiftApi.deleteShift(id).subscribe(res => {
      this.dataShift = this.dataShift.filter(item => item._id !== id);
      console.log('shift deleted Suceessfully');
    })
  }
}
