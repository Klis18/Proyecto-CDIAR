import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosAcademicosModule } from './recursos-academicos/recursos-academicos.module';

const routes: Routes = [
  {
    path:'recursos',
    loadChildren: () => import('./recursos-academicos/recursos-academicos.module').then(m => RecursosAcademicosModule),
  },
  {
    path: '',
    redirectTo: 'recursos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
