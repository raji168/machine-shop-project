import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { CustomerViewComponent } from "./customer-view/customer-view.component";
import { InspectorComponent } from "./inspector/inspector.component";
import { ManagerComponent } from "./manager/manager.component";
import { NpdTeamComponent } from "./npd-team/npd-team.component";
import { SupervisorComponent } from "./supervisor/supervisor.component";

const routes: Routes = [
    {
        path:'admin',component:AdminComponent
    },
    {
        path:'manager',component:ManagerComponent
    },
    {
        path:'customer-view',component:CustomerViewComponent
    },
    {
        path:'inspector',component:InspectorComponent
    },
    {
        path:'npd',component:NpdTeamComponent
    },
    {
        path:'supervisor',component:SupervisorComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashBoardRoutingModule {

}