import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineDataService } from 'src/app/data-services/machine-data.service';
import { Machine } from 'src/app/models/machine.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { AlertService } from 'src/app/shared/alert.service';
import { AddMachineComponent } from './add-machine/add-machine.component';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {


  machines: Machine[] = [];

  displayedColumns: string[] = ['select','sno', 'machinename', 'machineno', 'brand', 'category', 'actions'];

  machineDataSource$: Observable<MatTableDataSource<Machine>>;

  machineData = new MatTableDataSource<Machine>();

  isSelected:boolean;

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

    this.machineDataSource$ = this.machineDataService.machineUpdated$.pipe(map(machines => {
      return new MatTableDataSource(machines);
    }))
    this.machineDataSource$.subscribe(res => {
      this.machineData = new MatTableDataSource(res.data);
      this.machineData.paginator = this.paginator;
      this.machineData.sort = this.sort;
    })

  }

  ngAfterViewInit(): void {

    this.machineData.paginator = this.paginator;
    this.machineData.sort = this.sort;

  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.machineData.filter = filterValue.trim().toLocaleLowerCase();

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

  removeSelected() {
    const amachines = this.machineData.data.filter((m:Machine) => m.isSelected);
    this.dialogsService.openConfirmDialog('Are you sure to delete this selected records  ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.machineApi.deleteSelectMachine(amachines).subscribe(res => {
            this.machineData.data = this.machineData.data.filter((m:Machine) => !m.isSelected);
            this.alert.showError('Instrument Selected Records Deleted Successfully...!','Machine');
          })
        }
      });
  }

}
