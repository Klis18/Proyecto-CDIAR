import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RespuestaRecurso } from '../interfaces/recurso';

@Injectable({
  providedIn: 'root'
})
export class RecursosAcademicosService {


  private baseUrl: string = "https://localhost:7053/api/";
  
  constructor(private http: HttpClient) { }

  getRecursos():Observable<RespuestaRecurso>{
    return this.http.get<RespuestaRecurso>(`${this.baseUrl}recursos/obtener`);
  }

}
