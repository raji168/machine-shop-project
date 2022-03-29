import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
        providedIn:'root'
})

export class ProductDataService{
    
    private products  : Product[] =[];

    productUpdated$= new BehaviorSubject<Product[]>([])

    getProduct(){
        return [...this.products]
    }

    loadProduct(products : Product[]){
        this.products = products;
        this.productUpdated$.next(this.products)
    }
    addProduct(product :Product){
        this.products = [...this.products,product]
        this.productUpdated$.next(this.products)
    }
    updateProduct(productResponse : Product){
        const updateProduct = this.products.find(product => product._id === productResponse._id)
        const updateProductIndex =this.products.findIndex(product => product._id == productResponse._id )
        const updatedProduct = { ...updateProduct, ...productResponse}
        this.products[updateProductIndex] = updatedProduct
        this.productUpdated$.next(this.products);
    }

    deleteProduct(id: string) {
        this.products = this.products.filter(product => product._id !== id);
        this.productUpdated$.next(this.products);
    }

}