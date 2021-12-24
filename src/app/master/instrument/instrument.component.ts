import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})


export class InstrumentComponent implements OnInit {

 
  constructor(private _service:InstrumentService,
    public _notification: NotificationService,
    public _dialog : MatDialog ) { }

  grdlistData: MatTableDataSource<any> ;
  displayedColumns:string[]=['serialno','name','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey:string;

  ngOnInit(): void {
    this.fillGrid();
  }
  fillGrid(){
    this._service.getAlldepartment()
    .subscribe(
      data=>{
        this.grdlistData=new MatTableDataSource(data);
        this.grdlistData.sort=this.sort;
        this.grdlistData.paginator=this.paginator;
      
      }
    );
  }
  applyFilter(){
    this.grdlistData.filter=this.searchKey.trim().toLocaleLowerCase();
  }
  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }
  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus =true;
    dialogConfig.width="30%";
    this._dialog.open(AddInstrumentComponent,dialogConfig);
  }

  onEdit(){
    this._notification.success("you clicked Edit !");
  }
  onDelete(){
    this._notification.warn("you clicked Delete !");
  }
  

}





  
