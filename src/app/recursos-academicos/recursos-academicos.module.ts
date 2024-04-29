import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosAcademicosRoutingModule } from './recursos-academicos-routing.module';
import { TablaRecursosComponent } from './components/tabla-recursos/tabla-recursos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RepositorioRecursosComponent } from './pages/repositorio-recursos/repositorio-recursos.component';
import { HttpClientModule } from '@angular/common/http';

import { ObjToArrayPipe } from './pipes/objToArray.pipe';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablaRecursosComponent,
    RepositorioRecursosComponent,
    ObjToArrayPipe,
    FiltrosBusquedaComponent
  ],
  imports: [
    CommonModule,
    RecursosAcademicosRoutingModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    TablaRecursosComponent,
    RepositorioRecursosComponent
  ]
})
export class RecursosAcademicosModule { }
