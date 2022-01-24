import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./Product/product.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { AddProductComponent } from "./Product/add-product/add-product.component";


const routes: Routes = [

    {
        path: 'mapping', component: ProductComponent
    },
    {
        path: 'upload', component:FileUploadComponent
    },
    {
        path:' product', component:AddProductComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }