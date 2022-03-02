import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PreloginComponent } from './prelogin/prelogin.component';


const routes: Routes = [


  // { path: '', redirectTo: '/main/master' ,pathMatch:'full' },
  
  {
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    // canActivate:[AuthGuard]
  },
  {
    path:'login' ,component:PreloginComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
