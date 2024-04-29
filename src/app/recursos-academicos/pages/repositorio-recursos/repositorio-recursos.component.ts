import { Component, OnInit } from '@angular/core';
import { Recurso, RespuestaRecurso} from '../../interfaces/recurso';
import { RecursosAcademicosService } from '../../services/recursos-academicos.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'repositorio-recursos',
  templateUrl: './repositorio-recursos.component.html',
  styles: ``
})
export class RepositorioRecursosComponent implements OnInit{

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  
  public recursos: Recurso[] = [];


  constructor(private recursosService:RecursosAcademicosService){}

  ngOnInit(): void {
    this.items = [{ label: 'Recursos Académicos' }, { label: 'Repositorio de Recursos' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

      this.recursosService.getRecursos().subscribe((res: RespuestaRecurso)=>{
        this.recursos = res.data;
        console.log(res.data);
        });
  }
  
}
