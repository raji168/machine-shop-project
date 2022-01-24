import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./Product/product.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";


const routes: Routes = [

    {
        path: 'mapping', component: ProductComponent
    },
    {
        path: 'upload', component:FileUploadComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductLibraryRoutingModule { }