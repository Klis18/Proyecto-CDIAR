import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositorioRecursosComponent } from './pages/repositorio-recursos/repositorio-recursos.component';

const routes: Routes = [
  {
    path:'',
    component: RepositorioRecursosComponent,
    children:[
      {path: 'list', component: RepositorioRecursosComponent},
      {path:'**', redirectTo:'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosAcademicosRoutingModule { }
