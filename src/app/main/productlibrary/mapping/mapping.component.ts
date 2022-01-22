import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { MappingDataService } from 'src/app/data-services/mapping-data.service';
import { Product } from 'src/app/models/mapping.model';
import { MappingApiService } from 'src/app/services/mapping-api.service';
import { map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { MatSort } from '@angular/material/sort';



const ELEMENT_DATA: Product[] = [];

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],

})


export class MappingComponent {

 
  displayedColumns: string[] = ['S.no', 'Operation Name', 'Drawing No', 'Drawing', 'Jsir Doc', 'Pms Doc', 'PDIR Doc', 'ISIR Doc'];

  mappingDataSource$: Observable<MatTableDataSource<Product>>;
  products;

  expandedProduct: Product;
  expandedProductIdMap: { [productId: string]: string } = {};

  expandedProductIds: string[] = []

  constructor(
    private mappingApiService: MappingApiService,
    private mappingDataService: MappingDataService
  ) { }

  ngOnInit(): void {
    //   this.mappingDataSource$ =this.mappingDataService.mappingUpdated$.pipe(map(data =>{
    //     return new MatTableDataSource(data);
    //   }))
    // }
    this.mappingApiService.get().subscribe(data => {
      this.products = data
      console.log(this.products);
    })

  }

  // onExpandClick(product: Product) {
  //   if (this.expandedProductMap[product._id]) {
  //     delete this.expandedProductMap[product._id]
  //   } else {
  //     this.expandedProductMap[product._id] = product._id
  //   }
  // }

  onExpandClick(product: Product) {
    if (this.isExpanded(product._id)) {
      this.expandedProductIds = this.expandedProductIds.filter(productId => productId !== product._id)
    } else {
      this.expandedProductIds = [...this.expandedProductIds, product._id]
      // this.expandedProducts.push(product._id)
    }
  }

  isExpanded(productId: string) {
    return this.expandedProductIds.indexOf(productId) !== -1
  }


}

