import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  MachineMappingComponent } from "./Machine mapping/machine-mapping.component";
import { ProductComponent } from "../productlibrary/Product/product.component";
import { AddProductComponent } from "../productlibrary/Product/add-product/add-product.component";



const routes: Routes = [

    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'mapping', component: MachineMappingComponent
    },
    {
        path:' add-product', component:AddProductComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }