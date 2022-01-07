import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MachineDataService } from 'src/app/data-services/machine-data.service';
import { Machine } from 'src/app/models/machine.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AddMachineComponent } from './add-machine/add-machine.component';


const ELEMENT_DATA: Machine[] = [];

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {


  // machineData: Machine[] = [];

  displayedColumns: string[] = ['sno', 'machinename', 'machineno', 'brand', 'category', 'actions'];

  machineDataSource$ : Observable<MatTableDataSource<Machine>>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private machineApi: MachineApiService,
    private alert: AlertService,
    private machineDataService: MachineDataService,
    private dialogsService: DialogsService
  ) { }



  ngOnInit(): void {
    
    // this.machineData = this.machineDataService.getMachine()
    // this.machineDataService.machineUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(machines => {
    // this.machineData = machines
    // this.machineDataSource = new MatTableDataSource(this.machineData);
    // this.machineDataSource.paginator = this.paginator;
    // this.machineDataSource.sort = this.sort;
       
     this.machineDataSource$ = this.machineDataService.machineUpdated$.pipe(map(machines =>{
       return new MatTableDataSource(machines)
     }))
  }
  
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    // this.machineDataSource.filter = filterValue.trim().toLowerCase();

  }

  onClickAdd() {

    this.dialog.open(AddMachineComponent);

  }

  onClickEdit(machine: Machine) {

    this.dialog.open(AddMachineComponent, { data: { machine } });

  }

  onClickDelete(id: string) {

    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.machineApi.deleteMachine(id).subscribe(res => {
            this.alert.showError('Machine Deleted Successfully...!', 'Machine');
          })
        }
      });

  }
}
