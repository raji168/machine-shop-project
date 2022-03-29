import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  MachineMappingComponent } from "./Machine mapping/machine-mapping.component";
import { ProductResolver } from "src/app/resolvers/product.resolver";
import { MachineMappingResolver } from "src/app/resolvers/machinemapping.resolver";
import { ProductComponent } from "./Product/product.component";



const routes: Routes = [

    {
        path: 'product', component:ProductComponent ,
        resolve: {
            product : ProductResolver
        }
    },
    {
        path: 'mapping', component: MachineMappingComponent,
        resolve:{
            mappings: MachineMappingResolver
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }