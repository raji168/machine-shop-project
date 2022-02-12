import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineMappingDataService } from 'src/app/data-services/machinemapping-data.service';
import { MachineMapping } from 'src/app/models/machinemapping.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineMappingApiService } from 'src/app/services/machinemapping-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductApiService } from 'src/app/services/product-api.service';
import { AddCustomerComponent } from '../../master/customer/add-customer/add-customer.component';
import { AddMachinemapComponent } from './add-machinemap/add-machinemap.component';

@Component({
  selector: 'app-machine-mapping',
  templateUrl: './machine-mapping.component.html',
  styleUrls: ['./machine-mapping.component.scss']
})
export class MachineMappingComponent implements OnInit {

  displayedColumns: string[] = [ 'sno','productName','machineName','actions'];
  searchKey: string;

  form =new FormGroup({
    sno: new FormControl(''),
    productName: new FormControl(''),
    // processName: new FormControl(''),
    machineMapping: new FormControl(''),
  });
  
 machineMapDataSource$: Observable<MatTableDataSource<MachineMapping>>;

  constructor(
    private machineMapService : MachineMappingApiService,
    private machineService:MachineMappingApiService,
    private productService:ProductApiService,
    private machineMapDataService : MachineMappingDataService,
    private notification : NotificationService,
    private dialog : MatDialog,
    private dialogService : DialogsService
  ) { }

  mapping: MachineMapping[] = [];
  mappingData;

  ngOnInit(): void {
    this.machineMapDataSource$ = this.machineMapDataService.machineMapUpdated$.pipe(map(machineMaps => {
      return new MatTableDataSource(machineMaps)
    }
    ))
    this.machineMapDataSource$.subscribe(
      (res)=>{
        this.mappingData = res.data;
      }
    )
   
    
  }
  onCreate() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "40%";
    // this.dialog.open(AddMachinemapComponent, dialogConfig);

    this.dialog.open(AddMachinemapComponent);
  }
  applyFilter() {
    // this.machineMapData.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  onEdit(mapping: MachineMapping) {
    this.dialog.open(AddMachinemapComponent, { data: { mapping } });
  }
  
  onDelete(id) {
    // this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    //   .afterClosed().subscribe(res => {
    //     // console.log(res);
    //     if (res) {
    //       this.machineMapService.deleteMachineMap(id).subscribe(res => {
    //         this.notification.success(' deleted Suceessfully');
    //       })
    //     }
    //   });
  }

}
