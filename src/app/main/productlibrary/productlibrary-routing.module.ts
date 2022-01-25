import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "../productlibrary/product/product.component";
import { MappingComponent } from "./mapping/mapping.component";
import { AddProductComponent } from "../productlibrary/product/add-product/add-product.component";



const routes: Routes = [

    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'mapping', component:MappingComponent
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