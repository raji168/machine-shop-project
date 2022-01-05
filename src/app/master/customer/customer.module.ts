import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerComponent } from "./customer.component";


@NgModule({
    
    declarations: [
        CustomerComponent,
        AddCustomerComponent
    ],
    imports: [
        ReactiveFormsModule,
        CustomerRoutingModule,
        MaterialModule

    ]
})


export class CustomerModule { }