import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'main/master', pathMatch: 'full' },
  {
    path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
