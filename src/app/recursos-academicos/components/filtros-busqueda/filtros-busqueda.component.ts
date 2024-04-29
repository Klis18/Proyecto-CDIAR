import { Component } from '@angular/core';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styles: ``
})
export class FiltrosBusquedaComponent {
  value: string = '';

  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
