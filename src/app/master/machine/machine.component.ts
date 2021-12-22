import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Machine } from 'src/app/models/machine.model';
import { MachineApiService } from 'src/app/services/machine-api.service';
import { AddMachineComponent } from './add-machine/add-machine.component';


const ELEMENT_DATA: Machine[] = [];

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  dataSource: Machine[] = [];

  displayedColumns: string[] = ['sno', 'machinename', 'machineno', 'brand', 'category', 'actions'];

  constructor(
    public dialog: MatDialog,
    private machineApi: MachineApiService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.machineApi.getMachineAll().subscribe(data => {
      this.dataSource = data;
    });
    this.toastr.success('Machine Records Loaded Successfully', 'Machine');

  }
  onClickAdd() {
    let dialogRef = this.dialog.open(AddMachineComponent);
  }

  onClickEdit() {
    let dialogRef = this.dialog.open(AddMachineComponent);
  }

  onClickDelete() {

  }
}
