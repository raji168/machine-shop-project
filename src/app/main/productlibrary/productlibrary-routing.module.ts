import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MappingComponent } from "./mapping/mapping.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";


const routes: Routes = [

    {
        path: 'mapping', component: MappingComponent
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