<<<<<<< HEAD
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

=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

>>>>>>> e6a2d9dffa10da60722437935ab2b635b3a09745
export class ProductLibraryRoutingModule{}