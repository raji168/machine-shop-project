import { Component } from '@angular/core';
import {  MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/data-services/product-data.service';
import { Product } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../Product/add-product/add-product.component';

const ELEMENT_DATA: Product[] = [];

@Component({
  selector: 'app-mapping',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],

})

export class ProductComponent {

  displayedColumns: string[] = ['S.no', 'Operation Name', 'Drawing No', 'Drawing', 'Jsir Doc', 'Pms Doc', 'PIR Doc','PDIR Doc', 'ISIR Doc'];
  mappingDataSource$: Observable<MatTableDataSource<Product>>;
  products;
  expandedProduct: Product;
  expandedProductIdMap: { [productId: string]: string } = {};
  expandedProductIds: string[] = []

  constructor(
    private productApiService: ProductApiService,
    private productDataService:ProductDataService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    //   this.mappingDataSource$ =this.productDataService.mappingUpdated$.pipe(map(data =>{
    //     return new MatTableDataSource(data);
    //   }))
    // }
    this.productApiService.get().subscribe(data => {
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
  onClickAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    dialogConfig.height = "100%";
    this.dialog.open(AddProductComponent,dialogConfig);
  }

}

