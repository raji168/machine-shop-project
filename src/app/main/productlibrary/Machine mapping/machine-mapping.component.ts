import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineMappingDataService } from 'src/app/data-services/machinemapping-data.service';
import { MachineMapping } from 'src/app/models/machinemapping.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MachineApiService } from 'src/app/services/machine-api.service';
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

  displayedColumns: string[] = [ 'sno','productName','processName','machineName','actions'];
  searchKey: string;

  form =new FormGroup({
    sno: new FormControl(''),
    product: new FormControl(''),
    process: new FormControl(''),
    machine: new FormControl(''),
  });
  
 machineMapDataSource$: Observable<MatTableDataSource<MachineMapping>>;

  constructor(
    private machineMapService : MachineMappingApiService,
    private productService:ProductApiService,
    private machineService: MachineApiService,
    private machineMapDataService : MachineMappingDataService,
    private notification : NotificationService,
    private dialog : MatDialog,
    private dialogService : DialogsService
  ) { }

  machinemapping: MachineMapping[] = [];
  mappingData;
  productData;
  machineData;
  processData;
  ngOnInit(): void {
    this.machineMapDataSource$ = this.machineMapDataService.machineMapUpdated$.pipe(map(machineMaps => {
      return new MatTableDataSource(machineMaps)
    }))
    this.machineMapService.get().subscribe(machineMap => {
      this.mappingData = machineMap;
    });
    this.productService.get().subscribe(product => {
      this.productData = product;
    });
    this.machineService.getMachineAll().subscribe(machine =>{
      this.machineData = machine;
    });
  }
  getProduct(productId) {
    if(productId) {
      const product = this.productData.find(product => product._id === productId);
      return product.productName;
    }
    else {
      return '-';
    }
  }
  getMachine(machineId) {
    if(machineId){
      const machine = this.machineData.find(machine => machine._id === machineId);
      return machine.machinename;
    }
    else{
      return '-';
    }
  }
  getProcess(productId,processId){
    if(productId) {
      const product = this.productData.find(product => product._id === productId);
      this.processData= product.process;
      if(processId){
        const processValue = this.processData.find(process => process._id === processId)
        return processValue.operationName
      }
    } else{
      return '-';
    }
  }
  onCreate() {
    this.dialog.open(AddMachinemapComponent);
  }
  
  onEdit(machinemapping: MachineMapping) {
    this.dialog.open(AddMachinemapComponent, { data: { machinemapping } });
    console.log(machinemapping)
  }
  
  onDelete(id) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.machineMapService.deleteMachineMap(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }

}

