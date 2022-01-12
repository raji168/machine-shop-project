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
  styleUrls: ['./instrument.component.scss']
})


export class InstrumentComponent implements OnInit {

  // instrumentData: InstrumentModel[] = [];


  displayedColumns: string[] = ['sno', 'name', 'referenceno', 'range', 'calibratedon', 'calibratedue', 'actions'];

  searchKey: string;
  grdlistData;

  headerSelector: boolean = false;
  instrumentDataSource$: Observable<MatTableDataSource<InstrumentModel>>;

  form = new FormGroup({
    sno: new FormControl(''),
    name: new FormControl(''),
    referenceno: new FormControl(''),
    range: new FormControl(''),
    calibratedon: new FormControl(''),
    calibratedue: new FormControl('')
  });


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private instrumentService: InstrumentService,
    private instrumentDataService: InstrumentDataService,
    private _notification: NotificationService,
    private _dialog: MatDialog,
    private dialogsService: DialogsService) {

  }


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
  }


<<<<<<< HEAD
=======

>>>>>>> 3a9efad18a43533b7c947eb1f5f8c8447fcb52cd
  fillGrid() {
    this.instrumentService.get()
      .subscribe(
        data => {
          this.grdlistData = new MatTableDataSource(data);
          this.grdlistData.sort = this.sort;
          this.grdlistData.paginator = this.paginator;

        }
      );
<<<<<<< HEAD
    // this.instrumentService.get()
    //   .subscribe(
    //     data => {
    // this.grdlistData = new MatTableDataSource();
    // this.instrumentDataSource$.subscribe(
    //   ((res) => {
    //     this.grdlistData = res.data;
    //     this.grdlistData = new MatTableDataSource(res.data);
    //     this.grdlistData.sort = this.sort;
    //     this.grdlistData.paginator = this.paginator;
    //   })
    // )
    //   }
    // );

    // }
  }

  ngAfterViewInit(): void {
=======

      }
  ngAfterViewInit(): void{
>>>>>>> 3a9efad18a43533b7c947eb1f5f8c8447fcb52cd
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

<<<<<<< HEAD
  //   onSelect($event) {
  //     const id = $event.target.value;
  //     const isChecked = $event.target.checked;
  //     this.grdlistData = this.grdlistData.map((d) => {
  //     if (d.id == id) {
  //       d.select = isChecked;
  //       this.headerSelector = false;
  //       return d;
  //     }
  //     if (id == -1) {
  //       d.select = this.headerSelector;
  //       return d;
  //     }
  //     return d;
  //   });
  //   console.log(this.grdlistData);
  // }

=======
//   onSelect($event) {
//     const id = $event.target.value;
//     const isChecked = $event.target.checked;
//     this.grdlistData = this.grdlistData.map((d) => {
//     if (d.id == id) {
//       d.select = isChecked;
//       this.headerSelector = false;
//       return d;
//     }
//     if (id == -1) {
//       d.select = this.headerSelector;
//       return d;
//     }
//     return d;
//   });
//   console.log(this.grdlistData);
// }

allComplete: boolean = false;

updateAllComplete() {
  this.allComplete = this.grdlistData != null && this.grdlistData.every(t => t.completed);
}

someComplete(): boolean {
  if (this.grdlistData == null) {
    return false;
  }
  return this.grdlistData.filter(t => t.completed).length > 0 && !this.allComplete;
}

setAll(completed: boolean) {
  this.allComplete = completed;
  if (this.grdlistData == null) {
    return;
  }
  this.grdlistData.forEach(t => (t.completed = completed));
}
  
>>>>>>> 3a9efad18a43533b7c947eb1f5f8c8447fcb52cd
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
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



}

