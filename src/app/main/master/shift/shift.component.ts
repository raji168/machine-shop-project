import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Shift } from 'src/app/models/shift.model';
import { ShiftApiService } from 'src/app/services/shift-api.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { ShiftDataService } from 'src/app/data-services/shift-data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  displayedColumns: string[] = ['select','sno', 'shiftName', 'startTime', 'endTime', 'actions'];

  shiftDataSource$: Observable<MatTableDataSource<Shift>>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataS = new MatTableDataSource<Shift>();

  shifts:Shift[] = [];
 
  isSelected:boolean;

  constructor(
    private shiftApi: ShiftApiService,
    public dialog: MatDialog,
    private alert: AlertService,
    private dialogsService: DialogsService,
    private shiftDataService: ShiftDataService
  ) { 

  }

  ngOnInit(): void {
    this.shiftDataSource$ = this.shiftDataService.shiftUpdated$.pipe(map(shifts => {
      return new MatTableDataSource(shifts);
    }))
    this.shiftDataSource$.subscribe(res =>{
      this.dataS = new MatTableDataSource(res.data);
      this.dataS.paginator = this.paginator;
      this.dataS.sort = this.sort;
    })

  }

   ngAfterViewInit(): void{

     this.dataS.paginator = this.paginator;
     this.dataS.sort = this.sort;

   }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataS.filter = filterValue.trim().toLocaleLowerCase();

  }

  onClickAdd() {

    this.dialog.open(AddShiftComponent);

  }


  onClickEdit(shift: Shift) {
    this.dialog.open(AddShiftComponent, { data: { shift } });
  }

  onClickDelete(id: string) {

    this.dialogsService.openConfirmDialog('Are you sure to delete this record  ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.shiftApi.deleteShift(id).subscribe(res => {
            this.alert.showError('Shift Deleted Successfully...!', 'Shift');
          })
        }
      });
  }

  removeSelected(){

    const ashifts = this.dataS.data.filter((s :Shift) => s.isSelected);
    this.dialogsService.openConfirmDialog('Are you sure to delete this selected records  ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.shiftApi.deleteSelectShift(ashifts).subscribe(res => {
            this.dataS.data = this.dataS.data.filter((s:Shift)=> !s.isSelected);
            this.alert.showSuccess('Shifts Deleted Successfully...!', 'Shift');
          })
        }
      });
 
  }

  //  removeSelected(shifts:Shift[]){

  //   // const ashifts = this.dataS.data.filter((s :Shift) => s.isSelected);
  //   this.dialogsService.openConfirmDialog('Are you sure to delete this record  ?')
  //     .afterClosed().subscribe(res => {
  //       if (res) {
  //         this.shiftDataService.deleteSelectShift(shifts).   this.alert.showError('Shift Selected Records Deleted Successfully...!', 'Shift');
  //         })
  //       }
  //     });
 
  // }


}



