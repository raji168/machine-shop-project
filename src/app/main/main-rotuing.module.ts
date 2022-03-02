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
<<<<<<< HEAD
        path : 'rxjslearning', component: RxjsLearningComponent
      },
=======
        path:'dashboard',loadChildren:() => import('../main/dashboard/dashboard.module').then(d=> d.DashboardModule),

      }
>>>>>>> c21c468cf16479afc3b1baf05cb350500cb84ea9
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MainRoutingModule { }