import {  Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/data-services/product-data.service';
import { Product } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogsService } from 'src/app/services/dialogs.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerApiService } from 'src/app/services/customer-api.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

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
  productData;
  customerData;
  searchKey: string;
  expandedProduct: Product;
  expandedProductIdMap: { [productId: string]: string } = {};
  expandedProductIds: string[] = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private productApiService: ProductApiService,
    private productDataService: ProductDataService,
    private customerService: CustomerApiService,
    private dialog: MatDialog,
    private dialogsService: DialogsService,
    private notification: NotificationService
  ) { }
  ngOnInit(): void {
    this.productDataSource$ = this.productDataService.productUpdated$.pipe(map(data => {
      return new MatTableDataSource(data);
    }))
    this.productApiService.get().subscribe(data => {
      this.productData = data
    })
    this.customerService.getCustomerAll().subscribe(customer=>{
      this.customerData = customer
      console.log(this.customerData)
    })
  }

 
  
  getCustomer(customerId){
    if(customerId){
      const customer = this.customerData.find(customer=> customer._id== customerId)
      return customer.customername;
    }else{
      return '-'
    }
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
  onClickAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "80%";
    this.dialog.open(AddProductComponent, dialogConfig);
  }

  applyFilter() {
    this.productData.filter = this.searchKey.trim().toLocaleLowerCase();
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
        if (res) {
          this.productApiService.deleteProduct(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }
}




