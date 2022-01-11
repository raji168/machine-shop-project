import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { ProductLibraryComponent } from './product-library/product-library.component';

const routes: Routes = [

  { path: '', redirectTo: 'master/instrument', pathMatch: 'full' },
  {
    path: '', component: MasterComponent, children: [
      {
        path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
      }
    ]
  },
{ path :'product-library', component:ProductLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
