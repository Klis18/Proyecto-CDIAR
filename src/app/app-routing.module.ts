import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosAcademicosModule } from './recursos-academicos/recursos-academicos.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path:'recursos',
    loadChildren: () => import('./recursos-academicos/recursos-academicos.module').then(m => RecursosAcademicosModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
