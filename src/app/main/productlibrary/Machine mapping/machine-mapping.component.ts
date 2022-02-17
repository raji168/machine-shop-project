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

  mapping: MachineMapping[] = [];
  mappingData;
  productData;
  machineData;
  product: any;
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
      for(let index=0; index< this.productData.length; index++) {
        if(this.productData[index]._id === productId) {
          return this.productData[index]?.productName
        }
      }
    }
    else {
      return '-';
    }
  }
  getMachine(machineId) {
    if(machineId){
      for(let index=0; index< this.machineData.length; index++) {
        if(this.machineData[index]._id === machineId) {
          return this.machineData[index]?.machinename
        }
      }
    }
    else{
      return '-';
    }
  }
  getProcess(productId){
    if(productId) {
      for(let index=0; index< this.productData.length; index++) {
        if(this.productData[index]._id === productId) {
          const data = this.productData[index]?.productName.process     
          console.log(data)   
        }
      }
    }
  }
  onCreate() {
    this.dialog.open(AddMachinemapComponent);
  }
  
  onEdit(mapping: MachineMapping) {
    this.dialog.open(AddMachinemapComponent, { data: { mapping } });
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

  // getProduct(productId){
  //   console.log(productId)
  //   const productValue = this.productData.filter(product => product.id === productId);
  //   console.log(productValue);
  // }
  // getMachine(machineId){
  //   const machineValue = this.machineData.filter(machine => machine.id === machineId)
  //   console.log(machineValue)
  // }
  // const data = this.mappingData.filter((product)=> this.productData.includes(product.id));

  // getProduct(machineData,productData){
    //   let res =[];
    //    res = machineData.map(obj =>{
    //     const index = productData.findIndex(el => el["id"] == obj["id"]);
    //     const product = index != -1 ? productData[index] : {};
    //     console.log(product)
  
    //     return {
    //       ...obj,
    //       product
    //     };
    //   });
    // }

    // getProduct(value){
    //   const data = this.mappingData.filter(product => product.id === value);
    //   this.product = data[0].product;
    //   console.log(data)
    //   console.log(this.product);
    // }