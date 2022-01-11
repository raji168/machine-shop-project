import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from '../app/main/master/master.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
    path:'main' , loadChildren:() => import('./main/main.module').then(m =>m.MainModule)
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
