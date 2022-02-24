import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreationJoincreationOperatorComponent } from "./creation-joincreation-operator/creation-joincreation-operator.component";

const routes: Routes = [
  {
    path : 'rxjs-creation&joincreation-operator' , component : CreationJoincreationOperatorComponent  
  }
]
    


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class RxjsLearningRoutingModule { }