import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MappingComponent } from "./mapping/mapping.component";

const routes : Routes = [
 
   {
       path:'mapping' , component:MappingComponent
   }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductLibraryRoutingModule{}