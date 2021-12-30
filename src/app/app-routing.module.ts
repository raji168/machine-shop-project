import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';

const routes: Routes = [

  { path: '', redirectTo: 'master/role', pathMatch: 'full' },
  {
    path: '', component: MasterComponent, children: [
      {
        path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
