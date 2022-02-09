import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component"
import { ManagementComponent } from "./management/management.component";

const routes: Routes = [
    // {
    //     path: '', component: DashboardComponent
    // },
    {
        path:'management',component:ManagementComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashBoardRoutingModule {

}