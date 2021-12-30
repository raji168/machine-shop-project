import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { InstrumentService } from 'src/app/services/instrument.service';
import { InstrumentModel } from 'src/app/models/instrument.model';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})


export class InstrumentComponent implements OnInit {

  instrumentData: InstrumentModel[] = [];
  
  constructor(
    private _service: InstrumentService,
    private _notification: NotificationService,
    private _dialog: MatDialog) { }

  grdlistData: MatTableDataSource<any>;

  displayedColumns: string[] = ['sno', 'name', 'referenceno','range','calibratedon','calibratedue','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  searchKey: string;

  ngOnInit(): void {
    this._service.getreFreshAll()
    .subscribe(() =>{
      this.fillGrid();
    })
    this.fillGrid();
   
  }
  fillGrid() {
    this._service.getInstrumentAll()
      .subscribe(
        data => {
          this.instrumentData = data;
          this.grdlistData = new MatTableDataSource(data);
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

  onEdit() {
    this._notification.success("you clicked Edit !");
  }
  onDelete(id){ 
    this._service.deleteInstrument(id).subscribe(res =>{
      this.instrumentData = this.instrumentData.filter(item=>item._id!==id);
      this.ngOnInit();
      this._notification.success(' deleted Suceessfully');
    })
  }

   
}








function id(id: any) {
  throw new Error('Function not implemented.');
}

