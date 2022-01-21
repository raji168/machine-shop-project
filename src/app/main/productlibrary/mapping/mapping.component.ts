import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { MappingDataService } from 'src/app/data-services/mapping-data.service';
import { Mapping } from 'src/app/models/mapping.model';
import { MappingApiService } from 'src/app/services/mapping-api.service';
import { map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA: Mapping[] = [];

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],

  animations:[
    trigger('detailExpand',[
      state('collapsed', style({height:'0',minHeight:'0'})),
      state('expanded', style({height:'*'})),
      transition('expanded <=> collapsed' , animate('225ms cublic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class MappingComponent {

  // @ViewChild(MatAccordion) accordion: MatAccordion;

  // displayedColumns :string[] = ['sno','productName','customerName','process','status'];


  // mappingDataSource$ :Observable<MatTableDataSource<Mapping>>;
  // dataSource;
  // constructor(
  //   private mappingApiService : MappingApiService,
  //   private mappingDataService : MappingDataService
  // ) { }



  // ngOnInit(): void {
  // this.mappingDataSource$ =this.mappingDataService.mappingUpdated$.pipe(map(data =>{
  //   return new MatTableDataSource(data);
  // }))

  //     this.mappingApiService.get().subscribe(data =>{
  //       this.dataSource = data
  //       console.log(this.dataSource);
  //     })
  // }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Address>>;

  dataSource: MatTableDataSource<User>;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null;

  constructor(
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    USERS.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.usersData = [...this.usersData, { ...user, addresses: new MatTableDataSource(user.addresses) }];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;

  }
  toggleRow(element: User) {
    element.addresses && (element.addresses as MatTableDataSource<Address>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).sort = this.innerSort.toArray()[index]);
  }

  applyFilter(filterValue: string) {
    
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).filter = filterValue.trim().toLowerCase());
  }
}


export interface User {
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    name: "prabha",
    email: "prabha@test.com",
    phone: "1236549870",
    addresses: [
      {
        street: "Street 1",
        zipCode: "641032",
        city: "Cbe"
      },
      {
        street: "Street 2",
        zipCode: "641021",
        city: "Texas"
      }
    ]
  },
  {
    name: "raji",
    email: "raji@test.com",
    phone: "8786541234"
  },
  {
    name: "rajeswari",
    email: "rajeswari@test.com",
    phone: "7895284105.",
    addresses: [
      {
        street: "Street 5",
        zipCode: "641055",
        city: "sidco"
      },
      {
        street: "Street 5",
        zipCode: "87452",
        city: "cbe"
      }
    ]
  }
];




