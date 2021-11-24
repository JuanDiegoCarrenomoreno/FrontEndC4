import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/Trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  url : string = 'http://localhost:8000/api/trabajador/';

  constructor(private http: HttpClient) { }

  getTrabajadores () : Observable<any> {
    return this.http.get(this.url);
  }

  addTrabajador(trabajador: Trabajador) : Observable<any> {
    return this.http.post(this.url, trabajador);
  }

  deleteTrabajador(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

  getTrabajador (id: any) : Observable<any> {
    return this.http.get(this.url+id);
  }

  updateTrabajador(id: any, trabajador: Trabajador) : Observable<any> {
    return this.http.patch(this.url+id, trabajador);
  }

}
