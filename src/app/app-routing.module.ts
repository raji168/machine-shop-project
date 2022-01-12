import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './main/master/master.component';
import { ProductLibraryComponent } from './main/productlibrary/productlibrary.component';


const routes: Routes = [

  { path: '', redirectTo: 'main', pathMatch: 'full' },
 {
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
