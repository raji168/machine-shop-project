import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ManagementViewDataService } from 'src/app/data-services/dashboard/management-view.data.service';
import { ManagementView } from 'src/app/models/dashboard/management.-view.model';
import { ManagementViewApiService } from 'src/app/services/dashboard/management-view-api.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'machineName', 'customerName', 'productName', 'status'];

  managementDataSource$: Observable<MatTableDataSource<ManagementView>>;
     @ViewChild('datatable') table: MatTable<ManagementView>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  managementData; 



  constructor(
    private managemnetApi: ManagementViewApiService,
    private managementDataService: ManagementViewDataService
  ) { }

  ngOnInit(): void {

    this.managemnetApi.getAll().subscribe(data => {
      this.managementData = data;
    })

    // this.managementDataSource$ = this.managementDataService.managementUpdated$.pipe(map(managements => {
    //   return new MatTableDataSource(managements);
    // }))

    // this.managementDataSource$.subscribe(res =>{
    //   this.managementData = new MatTableDataSource(res.data);
    //   this.managementData.paginator = this.paginator;
    //   this.managementData.sort = this.sort;
    // })

  }

  ngAfterViewInit(): void {

    // this.managementData.paginator = this.paginator;
    // this.managementData.sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.managementData, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.managementData.filter = filterValue.trim().toLocaleLowerCase();

  }



}
