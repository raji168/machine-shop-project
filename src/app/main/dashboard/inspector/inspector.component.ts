import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { InspectorViewDataService } from 'src/app/data-services/dashboard/inspector-view.data.service';
import { InspectorView } from 'src/app/models/dashboard/inspector-view.model';
import { InspectorViewApiService } from 'src/app/services/dashboard/inspector-view-api.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {


  displayedColumns: string[] = ['sno', 'machineName', 'customerName', 'productName', 'partNo','timeSchedule','entry','status'];

  inspectorDataService$ : Observable<MatTableDataSource<InspectorView>>;

  inspectorData;

  constructor(
    private inspectorApi:InspectorViewApiService,
    private inspectorDataService:InspectorViewDataService
  ) { }

  ngOnInit(): void {

    this.inspectorApi.get().subscribe(data =>{
      this.inspectorData = data
    })
  }

  drop(event: CdkDragDrop<InspectorView[]>){
    moveItemInArray(this.inspectorData,event.previousIndex,event.currentIndex);
  }

  applyFilter(event:Event){

    const filterValue = (event.target as HTMLInputElement).value;
    this.inspectorData.filter = filterValue.trim().toLocaleLowerCase();
  }
}
