import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DailyreportComponent } from "./dailyreport/dailyreport.component";
import { IsirComponent } from "./isir/isir.component";
import { JsirComponent } from "./jsir/jsir.component";
import { PdirComponent } from "./pdir/pdir.component";
import { PirComponent } from "./pir/pir.component";
import { PmsComponent } from "./pms/pms.component";

const routes: Routes = [

    {
        path: 'dailyreport', component: DailyreportComponent
    },
    {
        path:'jsir',component:JsirComponent
    },
    {
        path:'isir',component:IsirComponent
    },
    {
        path:'pdir',component:PdirComponent
    },
    {
        path:'pir',component:PirComponent
    },
    {
        path:'pms',component:PmsComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ReportRoutingModule { }



