import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineGroupDataService } from 'src/app/data-services/machinegroup-data.service';
import { machineGroup } from 'src/app/models/machinegroup.models';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineGroupApiService } from 'src/app/services/machinegroup-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AddMachineGroupComponent } from './add-machine-group/add-machine-group.component';

@Component({
  selector: 'app-machine-group',
  templateUrl: './machine-group.component.html',
  styleUrls: ['./machine-group.component.scss']
})
export class MachineGroupComponent implements OnInit {
  displayedColumns: string[] = ['serialno', 'name', 'actions'];
  machinegroup: machineGroup[]=[];
  machinegroupForm: FormGroup = new FormGroup({
    serialno: new FormControl(''),
    name: new FormControl('')
  });

  machinegroupDataSource$: Observable<MatTableDataSource<machineGroup>>;


  constructor(
    private machinegroupService: MachineGroupApiService,
    private machinegroupDataService: MachineGroupDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService: DialogsService,) {
  }
  ngOnInit(): void {

    this.machinegroupDataSource$ = this.machinegroupDataService.machineGroupUpdated$.pipe(map(machinegroups => {
      return new MatTableDataSource(machinegroups)
    }))
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    this.dialog.open(AddMachineGroupComponent, dialogConfig);
  }

  onEdit(machinegroup: machineGroup) {
    this.dialog.open(AddMachineGroupComponent, { data: { machinegroup } });
    console.log(machinegroup)
  }
  
  onDelete(id) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.machinegroupService.deleteMachineGroup(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }

}
