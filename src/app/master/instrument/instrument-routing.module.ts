import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InstrumentComponent } from "./instrument.component";

const routes: Routes = [
    {path:'' , component : InstrumentComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstrumentRoutingModule { }