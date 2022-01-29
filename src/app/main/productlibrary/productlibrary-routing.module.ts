import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { ProductComponent } from "./Product/product.component";
import {  MachineMappingComponent } from "./Machine mapping/machine-mapping.component";
=======
import { ProductComponent } from "../productlibrary/product/product.component";
import { MappingComponent } from "./mapping/mapping.component";
import { AddProductComponent } from "../productlibrary/product/add-product/add-product.component";

>>>>>>> 659ad96515dfe9796bee879afa0ca74cb07a19c6


const routes: Routes = [

    {
        path: 'product', component: ProductComponent
    },
    {
<<<<<<< HEAD
        path: 'mapping', component: MachineMappingComponent
=======
        path: 'mapping', component:MappingComponent
    },
    {
        path:' add-product', component:AddProductComponent
>>>>>>> 659ad96515dfe9796bee879afa0ca74cb07a19c6
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }