import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/data-services/product-data.service';
import { Product } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../Product/add-product/add-product.component';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogsService } from 'src/app/services/dialogs.service';
import { NotificationService } from 'src/app/services/notification.service';

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

  displayedColumns: string[] = ['S.no', 'Operation Name', 'Drawing No', 'Drawing', 'Jsir Doc', 'Pms Doc', 'PIR Doc', 'PDIR Doc', 'ISIR Doc'];
  productDataSource$: Observable<MatTableDataSource<Product>>;
  products;
  searchKey: string;
  expandedProduct: Product;
  expandedProductIdMap: { [productId: string]: string } = {};
  expandedProductIds: string[] = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private productApiService: ProductApiService,
    private productDataService: ProductDataService,
    private dialog: MatDialog,
    private dialogsService: DialogsService,
    private notification: NotificationService
  ) { }
  ngOnInit(): void {
    this.productDataSource$ = this.productDataService.productUpdated$.pipe(map(data => {
      return new MatTableDataSource(data);
    }))

    this.productApiService.get().subscribe(data => {
      this.products = data
      console.log(this.products);
    })

    // this.productDataSource$.subscribe(
    //   ((res) => {
    //     this.products = res.data;
    //     this.products = new MatTableDataSource(res.data);
    //     this.products.paginator = this.paginator;
    //     this.products.sort = this.sort;
    //   })
    // )
  }

  // ngAfterViewInit(): void {
  //   this.products.paginator = this.paginator;
  //   this.products.sort = this.sort;
  // }


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
  onClickAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "80%";
    this.dialog.open(AddProductComponent, dialogConfig);
  }

  applyFilter() {
    this.products.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  onEdit(product: Product) {
    this.dialog.open(AddProductComponent, { data: { product } });
  }

  onDelete(id) {
    this.dialogsService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        // console.log(res);
        if (res) {
          this.productApiService.deleteProduct(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }
}

