import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Machine } from 'src/app/models/machine.model';
import { Shift } from 'src/app/models/shift.model';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { AddMachineComponent } from './add-machine/add-machine.component';


const ELEMENT_DATA: Machine[] = [];

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  
  displayedColumns: string[] = ['sno', 'machinename', 'machineno', 'brand', 'category', 'actions'];

  dataMachine: MatTableDataSource<Machine>;

  constructor(
    public dialog: MatDialog,
    private machineApi: MachineApiService,
    private toastr: ToastrService) { }


    @ViewChild(MatPaginator) paginator: MatPaginator; 
    @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.machineApi.getMachineAll().subscribe(data => {
      this.dataMachine = new MatTableDataSource(data);
      this.dataMachine.paginator = this.paginator;
      this.dataMachine.sort= this.sort;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataMachine.filter = filterValue.trim().toLowerCase();
  }

  onClickAdd() {
    let dialogRef = this.dialog.open(AddMachineComponent);
  }

  onClickEdit() {
    let dialogRef = this.dialog.open(AddMachineComponent);
  }

  onClickDelete(id) {
    // this.machineApi.deleteMachine(id).subscribe(res =>{
    //   this.dataMachine = this.dataMachine.filter(item => item._id !== id);
    //   console.log('shift deleted Suceessfully');
    // })

  }
}
