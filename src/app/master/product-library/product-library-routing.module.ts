import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ProductDeatilsComponent } from "./product-deatils/product-deatils.component";


const routes:Routes =[
    {
        path :'' , redirectTo:'product-deatils' , pathMatch:'full'

    },
    {
        path :'product-details', component: ProductDeatilsComponent
    }
];


@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ProductLibraryRoutingModule{

}