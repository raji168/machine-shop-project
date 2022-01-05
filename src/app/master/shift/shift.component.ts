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
import { ShiftDataService } from 'src/app/data-services/shift-data.service';
import { takeUntil } from 'rxjs/operators';


const ELEMENT_DATA: Shift[] = [];

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  shiftData: Shift[] = [];

  shiftDataSource;

  displayedColumns: string[] = ['sno', 'shiftName', 'startTime', 'endTime', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private shiftApi: ShiftApiService,
    public dialog: MatDialog,
    private alert: AlertService,
    private dialogsService: DialogsService,
    private shiftDataService: ShiftDataService
  ) { }

  ngOnInit(): void {
    this.shiftData = this.shiftDataService.getShift()
    this.shiftDataService.shiftUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(shifts => {
      this.shiftData = shifts
    })
  }

  ngOnDestroy(): void {

    this.destroyed$.next();
    this.destroyed$.complete();

  }


  shiftFill() {

    this.shiftDataSource = new MatTableDataSource(this.shiftData);
    this.shiftDataSource.paginator = this.paginator;
    this.shiftDataSource.sort = this.sort;

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

    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.shiftApi.deleteShift(id).subscribe(res => {
            this.shiftData = this.shiftData.filter(item => item._id !== id);
            this.alert.showError('Data Deleted Suceessfully...!', 'Shift');
          })
        }
      });
  }
}

