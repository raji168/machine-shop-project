import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { RxjsLearningComponent } from "./Rxjs-learning/rxjs-learning.component";


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'master', loadChildren: () => import('../main/master/master.module').then(m => m.MasterModule),
      },
      {
        path: 'productlibrary', loadChildren: () => import('../main/productlibrary/productlibrary.module').then(p => p.ProductLibraryModule),
      },
      {
        path : 'rxjslearning', component: RxjsLearningComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MainRoutingModule { }