import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-recurso',
  templateUrl: './nuevo-recurso.component.html',
  styles: ``
})
export class NuevoRecursoComponent {

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
