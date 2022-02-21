import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineCategoryDataService } from 'src/app/data-services/machinecategory-data.service';
import { MachineCategory } from 'src/app/models/machine-category.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineCategoryApiService } from 'src/app/services/machinecategory-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AddMachineCategoryComponent } from './add-machine-category/add-machine-category.component';

@Component({
  selector: 'app-machine-category',
  templateUrl: './machine-category.component.html',
  styleUrls: ['./machine-category.component.scss']
})
export class MachineCategoryComponent implements OnInit {

  displayedColumns: string[] = ['serialno', 'machineCategory','machinegroup', 'actions'];
  machineCategoryForm: FormGroup = new FormGroup({
    serialno: new FormControl(''),
    machineCategoryName: new FormControl(''),
    machinegroup: new FormControl('')
  });
  machineCategoryDataSource$: Observable<MatTableDataSource<MachineCategory>>;
  constructor(
    private machineCategoryService: MachineCategoryApiService,
    private machineCategoryDataService: MachineCategoryDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService: DialogsService,) {
  }
  ngOnInit(): void {
    this.machineCategoryDataSource$ = this.machineCategoryDataService.machineCategoryUpdated$.pipe(map(machineCategory => {
      return new MatTableDataSource(machineCategory)
    }))
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddMachineCategoryComponent, dialogConfig);
  }

  onEdit(machineCategory: MachineCategory) {
    this.dialog.open(AddMachineCategoryComponent, { data: { machineCategory } });
  }
  onDelete(id :string) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.machineCategoryService.deleteMachineCategory(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }
}
