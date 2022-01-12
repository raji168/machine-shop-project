import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './main/master/master.component';
import { ProductLibraryComponent } from './main/productlibrary/productlibrary.component';

const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
    path: '', component: MasterComponent, children: [
      {
        path: 'master', loadChildren: () => import('../app/main/master/master.module').then(m => m.MasterModule),
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
