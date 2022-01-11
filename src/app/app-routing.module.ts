import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MasterComponent } from './master/master.component';
import { ProductLibraryComponent } from './product-library/product-library.component';
=======
>>>>>>> d1d70c53707e0cdbbfd15c221496f4b21a45d6ca

const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
<<<<<<< HEAD
    path: '', component: MasterComponent, children: [
      {
        path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
      }
    ]
  },
{ path :'product-library', component:ProductLibraryComponent}
=======
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }


>>>>>>> d1d70c53707e0cdbbfd15c221496f4b21a45d6ca
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
