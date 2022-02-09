import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { managementDataService } from 'src/app/data-services/management-data.service';
import { Management } from 'src/app/models/management.model';
import { ManagementApiService } from 'src/app/services/management-api.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  displayedColumns: string[] = [ 'sno', 'machineName', 'customerName', 'productName', 'status'];

  managementDataSource$: Observable<MatTableDataSource<Management>>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  managementData = new MatTableDataSource<Management>();

 

  constructor(
    private managemnetApi:ManagementApiService,
    private alert:AlertService,
    private managementDataService:managementDataService
  ) { }

  ngOnInit(): void {

    this.managementDataSource$ = this.managementDataService.managementUpdated$.pipe(map(managements => {
      return new MatTableDataSource(managements);
    }))

    this.managementDataSource$.subscribe(res =>{
      this.managementData = new MatTableDataSource(res.data);
      this.managementData.paginator = this.paginator;
      this.managementData.sort = this.sort;
    })
    console.log(this.managementData);
  }

  ngAfterViewInit():void{

    this.managementData.paginator = this.paginator;
    this.managementData.sort = this.sort;
  }

  applyFilter(event:Event){

    const filterValue = (event.target as HTMLInputElement).value;
    this.managementData.filter = filterValue.trim().toLocaleLowerCase();

  }

  

}
