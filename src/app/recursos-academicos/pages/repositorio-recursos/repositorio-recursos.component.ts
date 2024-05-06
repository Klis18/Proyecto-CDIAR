import { Component, OnInit } from '@angular/core';
import { Recurso, RespuestaRecurso} from '../../interfaces/recurso';
import { RecursosAcademicosService } from '../../services/recursos-academicos.service';
import { MenuItem } from 'primeng/api';
import { NuevoRecursoComponent } from '../nuevo-recurso/nuevo-recurso.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'repositorio-recursos',
  templateUrl: './repositorio-recursos.component.html',
  styles: ``,
  providers: [DialogService]
})
export class RepositorioRecursosComponent implements OnInit{

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  
  public recursos: Recurso[] = [];


  constructor(private recursosService:RecursosAcademicosService, public dialogService: DialogService){}

  ngOnInit(): void {
    this.items = [{ label: 'Recursos Académicos' }, { label: 'Repositorio de Recursos' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

      this.recursosService.getRecursos().subscribe((res: RespuestaRecurso)=>{
        this.recursos = res.data;
        console.log(res.data);
        });
  }
  
  ref: DynamicDialogRef | undefined;
    
  agregarRecurso(){
    this.ref = this.dialogService.open(NuevoRecursoComponent, {
      header: 'Nuevo Recurso',
    });
  }
  
}
