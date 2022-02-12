import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { ProductDataService } from "../data-services/product-data.service";
import { Product } from "../models/product.model";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductApiService{

  // URL : string = '/assets/stub/products.json';
  URL : string = 'http://192.168.0.17:3002/products';

  products : Product[] =[]

  constructor(
      private http : HttpClient,
      private productDataService : ProductDataService
  ){}

  get(): Observable<any>{
      return this.http.get<Product[]>(this.URL).pipe(
          tap((products) => {
              this.productDataService.loadProduct(products)
          })
      )
  }
  addProduct(product: Product) {
      return this.http.post<Product>(this.URL, product)
        .pipe(
          tap((product) => {
            this.productDataService.addProduct(product)
          })
        );
  }
  
  updateProduct(product: Partial<Product>, id) {
    return this.http.patch<Product>(`${this.URL}/${id}`, product)
      .pipe(
        tap(product => {
          this.productDataService.updateProduct(product)
        })
      );
  }

  deleteProduct(_id: string) {
    return this.http.delete<Product>(`${this.URL}/${_id}`)
    .pipe(
      tap(product => {
        this.productDataService.deleteProduct(product._id);
      })
    );
  }

  deleteSelectProduct(products :Product[]): Observable<Product[]>{
    return forkJoin(products.map(product => this.http.delete<Product>(`${this.URL}/${product._id}`)))
  }

  // getProcessByProduct(processId:string){
  //   return this.products.find(product => product.process[].
  // }
}