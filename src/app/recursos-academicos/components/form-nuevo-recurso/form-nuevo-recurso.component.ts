import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'form-nuevo-recurso',
  templateUrl: './form-nuevo-recurso.component.html',
  styles: ``,
  providers:[MessageService]
})
export class FormNuevoRecursoComponent {
  value:string = '';

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

  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
