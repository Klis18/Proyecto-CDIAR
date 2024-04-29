import { Component, Input } from '@angular/core';
import { Recurso } from '../../interfaces/recurso';


@Component({
  selector: 'tabla-recursos',
  templateUrl: './tabla-recursos.component.html',
  styles: `
            th{
              background-color: #07446C;
              color: white;
            }
          `
})
export class TablaRecursosComponent{
 
  @Input()
  public recursos: Recurso[] = [];


  getStyleColor(tipoRecurso: string){
    switch (tipoRecurso) {
        case 'Documento':
            return 'bg-cyan-700';
        case 'Enlace':
            return 'bg-orange-600';
        case 'Imagen':
            return 'bg-pink-700';
        default:
          return '';
    }
  }

  getIcon(tipoRecurso: string){
    switch (tipoRecurso) {
        case 'Documento':
            return 'pi pi-file';
        case 'Enlace':
            return 'pi pi-link';
        case 'Imagen':
            return 'pi pi-image';
        default:
          return '';
    }
  }
}
