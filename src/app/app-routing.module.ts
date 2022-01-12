import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MasterComponent } from './main/master/master.component';
import { ProductLibraryComponent } from './main/productlibrary/productlibrary.component';

=======
import { MainComponent } from './main/main.component';
import { ProductLibraryComponent } from './main/productlibrary/productlibrary.component';
>>>>>>> 3a9efad18a43533b7c947eb1f5f8c8447fcb52cd
const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
<<<<<<< HEAD
    path: '', component: MasterComponent, children: [
      {
        path: 'master', loadChildren: () => import('../app/main/master/master.module').then(m => m.MasterModule),
=======
    path: '', component: MainComponent, children: [
      {
        path: 'master', loadChildren: () => import('./main/main.module').then(m => m.MainModule),
>>>>>>> 3a9efad18a43533b7c947eb1f5f8c8447fcb52cd
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
