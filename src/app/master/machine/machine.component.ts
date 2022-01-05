import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  dataMachine: Machine[] = [];

  machineDataSource;

  displayedColumns: string[] = ['sno', 'machinename', 'machineno', 'brand', 'category', 'actions'];


  constructor(
    public dialog: MatDialog,
    private machineApi: MachineApiService,
    private alert: AlertService,
    private dialogsService: DialogsService) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.machineApi.refreshAll()
    .subscribe(()=>{
      this.machineFill();
    })
    this.machineFill();
  }

  machineFill(){
    this.machineApi.getMachineAll().subscribe(data => {
      this.dataMachine = data;
      this.machineDataSource = new MatTableDataSource(this.dataMachine);
      this.machineDataSource.paginator = this.paginator;
      this.machineDataSource.sort = this.sort;
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.machineDataSource.filter = filterValue.trim().toLowerCase();
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
            this.dataMachine = this.dataMachine.filter(item => item._id !== id);
            this.alert.showError('Machine Deleted Successfully...!', 'Machine');
          })
        }
      });
  }
}
