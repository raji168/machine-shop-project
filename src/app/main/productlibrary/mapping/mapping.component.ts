import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MappingDataService } from 'src/app/data-services/mapping-data.service';
import { Mapping } from 'src/app/models/mapping.model';
import { MappingApiService } from 'src/app/services/mapping-api.service';

const ELEMENT_DATA: Mapping[] = [];

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],
  animations:[
    trigger('detailExpand',[
      state('collapsed', style({height:'0px',minHeight:'0'})),
      state('expanded', style({height:'*'})),
      transition('expanded <=> collapsed' , animate('225ms cublic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class MappingComponent implements OnInit {

  displayedColumns :string[] = ['sno','productNo','productName','customerName','process','status','preparedBy'];

  mappingDataSource$ :Observable<MatTableDataSource<Mapping>>;
  dataSource;

  expandedElement:Mapping| null;

  constructor(
    private mappingApiService : MappingApiService,
    private mappingDataService : MappingDataService
  ) { }

  ngOnInit(): void {
  //   this.mappingDataSource$ =this.mappingDataService.mappingUpdated$.pipe(map(data =>{
  //     return new MatTableDataSource(data);
  //   }))
  // }
    this.mappingApiService.get().subscribe(data =>{
      this.dataSource =data
      console.log(this.dataSource);
    })

  }

}
