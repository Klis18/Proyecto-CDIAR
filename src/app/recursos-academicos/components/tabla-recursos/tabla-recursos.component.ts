import { Component, Input } from '@angular/core';
import { Recurso } from '../../interfaces/recurso';


@Component({
  selector: 'tabla-recursos',
  templateUrl: './tabla-recursos.component.html',
  styles: ``
})
export class TablaRecursosComponent{
 
  @Input()
  public recursos: Recurso[] = [];

}
