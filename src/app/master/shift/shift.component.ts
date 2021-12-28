import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data, Router } from '@angular/router';
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

  shift: Shift;

  dataShift: Shift[] = [];

  // dataSource = ELEMENT_DATA;

  dataSource: MatTableDataSource<Shift>;

  displayedColumns: string[] = ['sno', 'shiftName', 'startTime', 'endTime', 'actions'];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private shiftApi: ShiftApiService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {

    this.shiftApi.getShiftAll().subscribe(data => {
      this.dataShift = data;   
    });

    
  }

  // refresh(){
  //   this.myService.doSomething().subscribe((data:Shift[])=>{
  //     this.dataSource.data = data ;
  //   })
  // }
 

  onClickAdd() {

    this.dialog.open(AddShiftComponent);


  }
  onClickEdit(shift){
    this.dialog.open(AddShiftComponent , { data: { shift } });
  }

  onClickDelete(id: string) {
    this.shiftApi.deleteShift(id).subscribe(res => {
      this.dataShift = this.dataShift.filter(item => item._id !== id);
      console.log('shift deleted Suceessfully');
    })
  }
}
