import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MappingDataService } from 'src/app/data-services/mapping-data.service';
import { Mapping } from 'src/app/models/mapping.model';
import { MappingApiService } from 'src/app/services/mapping-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  displayedColumns :string[] = ['sno','productNo','productName','customerName','process','status','preparedBy'];

  mappingDataSource$ :Observable<MatTableDataSource<Mapping>>;
  dataSource ;
  constructor(
    private mappingApiService : MappingApiService,
    private mappingDataService : MappingDataService
  ) { }

  ngOnInit(): void {
    this.mappingDataSource$ =this.mappingDataService.mappigUpdated$.pipe(map(mapping =>{
      return new MatTableDataSource(mapping)
    }))
    // this.mappingApiService.get().subscribe(data =>{
    //   this.dataSource =data
    //   console.log(this.dataSource);
    // })

  }

}
