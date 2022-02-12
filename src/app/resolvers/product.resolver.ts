import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductApiService } from "../services/product-api.service";

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<any>{
    constructor(
        private productApi: ProductApiService
    ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.productApi.get()
    }
}