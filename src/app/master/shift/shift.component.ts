import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { DialogsService } from 'src/app/services/dialogs.service';


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
    private alert: AlertService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialogsService: DialogsService
  ) {

  }

  ngOnInit() {
    this.shiftApi.getreFreshAll()
      .subscribe(() => {
        this.getData();
      })
    this.getData();


  }
  getData() {
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


  onClickEdit(shift: Shift) {
    this.dialog.open(AddShiftComponent, { data: { shift } });
  }

  onClickDelete(id: string) {
<<<<<<< HEAD

=======
>>>>>>> 8f17f16a8cf222b674cbfec4b65c8b649695f3b6
    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.shiftApi.deleteShift(id).subscribe(res => {
            this.dataShift = this.dataShift.filter(item => item._id !== id);
            this.ngOnInit();
            this.alert.showError('Data Deleted Suceessfully...!', 'Shift');
          })
        }
      });

  }
<<<<<<< HEAD

}
=======
}
>>>>>>> 8f17f16a8cf222b674cbfec4b65c8b649695f3b6
