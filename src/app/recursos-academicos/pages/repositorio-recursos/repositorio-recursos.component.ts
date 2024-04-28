import { Component, OnInit } from '@angular/core';
import { Recurso} from '../../interfaces/recurso';
import { RecursosAcademicosService } from '../../services/recursos-academicos.service';

@Component({
  selector: 'repositorio-recursos',
  templateUrl: './repositorio-recursos.component.html',
  styles: ``
})
export class RepositorioRecursosComponent implements OnInit{

  public recursos: Recurso[] = [];

  constructor(private recursosService:RecursosAcademicosService){}

  ngOnInit(): void {
    this.recursosService.getRecursos()
      .subscribe(recursos => this.recursos = recursos)
      .add(() => console.log(this.recursos));

  }


  

}
