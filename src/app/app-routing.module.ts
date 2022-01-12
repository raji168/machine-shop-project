import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductLibraryComponent } from './main/productlibrary/productlibrary.component';
const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
    path: '', component: MainComponent, children: [
      {
        path: 'master', loadChildren: () => import('./main/main.module').then(m => m.MainModule),
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
