import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})


export class InstrumentComponent implements OnInit,OnDestroy {

  instrumentData: InstrumentModel[] = [];

  displayedColumns: string[] = ['checkBox','sno', 'name', 'referenceno','range','calibratedon','calibratedue','actions'];
  
  destroyed$ = new Subject();

  constructor(
    private instrumentService: InstrumentService,
    private instrumentDataService : InstrumentDataService,
    private _notification: NotificationService,
    private _dialog: MatDialog,
    private dialogsService:DialogsService) { 

  }

  form = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    referenceno: new FormControl(''),
    range: new FormControl(''),
    calibratedon: new FormControl(''),
    calibratedue: new FormControl('')
  });

  


  grdlistData: MatTableDataSource<any>;

 
  @ViewChild(MatSort) sort: MatSort;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  searchKey: string;
 

  ngOnInit(): void {
    
    this.instrumentData = this.instrumentDataService.getInstrument()
    this.instrumentDataService.instrumentUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(instruments => {
      this.instrumentData =instruments
    })
  }
  ngOnDestroy(): void {
   
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  fillGrid() {
    this.instrumentService.get()
      .subscribe(
        data => {
          // this.instrumentData = data;
          this.grdlistData = new MatTableDataSource();
          this.grdlistData.sort = this.sort;
          this.grdlistData.paginator = this.paginator;

        }
      );
    
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
    dialogConfig.width = "40%";
    this._dialog.open(AddInstrumentComponent, dialogConfig);
  }

  onEdit(instrument:InstrumentModel) {
    this._dialog.open(AddInstrumentComponent , { data : { instrument } });
  }
  onDelete(id){ 
    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      // console.log(res);
      if(res){
         this.instrumentService.deleteInstrument(id).subscribe(res =>{
            this.instrumentData = this.instrumentData.filter(item=>item._id!==id);
            this.ngOnInit();
            this._notification.success(' deleted Suceessfully');
          })
      }
    });
  }
  
  

}

