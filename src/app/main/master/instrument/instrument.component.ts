import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { InstrumentService } from 'src/app/services/instrument.service';
import { InstrumentModel } from 'src/app/models/instrument.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { InstrumentDataService } from 'src/app/data-services/instrument-data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss'],
})


export class InstrumentComponent implements OnInit {

  // instrumentData: InstrumentModel[] = [];
  val = this.calculateDiff;

  displayedColumns: string[] = [ 'sno', 'name', 'referenceno', 'range', 'calibratedon', 'calibratedue', 'actions'];

  searchKey: string;
  isDelete: false;
  status:true;
  

  form = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    referenceno: new FormControl(''),
    range: new FormControl(''),
    calibratedon: new FormControl(''),
    calibratedue: new FormControl('')
  });

  instrumentDataSource$: Observable<MatTableDataSource<InstrumentModel>>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private instrumentService: InstrumentService,
    private instrumentDataService: InstrumentDataService,
    private _notification: NotificationService,
    private _dialog: MatDialog,
    private dialogsService: DialogsService) {

  }

  grdlistData;


  ngOnInit(): void {
    this.instrumentDataSource$ = this.instrumentDataService.instrumentUpdated$.pipe(map(instruments => {
      return new MatTableDataSource(instruments)
    }
    ))
    this.instrumentDataSource$.subscribe(
      ((res) => {
        this.grdlistData = res.data;
        this.grdlistData = new MatTableDataSource(res.data);
        this.grdlistData.sort = this.sort;
        this.grdlistData.paginator = this.paginator;
      })
    )
    this.calculateDiff;
  }

  ngAfterViewInit(): void {
    this.grdlistData.paginator = this.paginator;
    this.grdlistData.sort = this.sort;
  }

  applyFilter() {
    this.grdlistData.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "33%";
    this._dialog.open(AddInstrumentComponent, dialogConfig);
  }

  onEdit(instrument: InstrumentModel) {
    this._dialog.open(AddInstrumentComponent, { data: { instrument } });
  }

  onDelete(id) {
    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        // console.log(res);
        if (res) {
          this.instrumentService.deleteInstrument(id).subscribe(res => {
            this._notification.success(' deleted Suceessfully');
          })
        }
      });
  }

  removeSelected() {
    const ainstruments = this.grdlistData.data.filter((i: InstrumentModel) => i.isSelected);
    this.dialogsService.openConfirmDialog('Are you sure to delete this selected records  ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.instrumentService.deleteSelectInstrument(ainstruments).subscribe(res => {
            this.grdlistData.data = this.grdlistData.data.filter((i: InstrumentModel) => !i.isSelected);
            this._notification.success('Instrument Selected Records Deleted Successfully...!');
          })
        }
      });
  }




  calculateDiff(calibratedon, calibratedue) {
    var date1:any = new Date(calibratedue);
    var date2:any = new Date(calibratedon);
    var diffDays:any = Math.floor((date1 - date2) / (1000 * 3600 * 24));
    return diffDays;
    // console.log(diffDays);
  }
  

}


