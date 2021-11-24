import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url : string = 'http://localhost:8000/api/evento/';

  constructor(private http: HttpClient) { }

  getEventos () : Observable<any> {
    return this.http.get(this.url);
  }

  addEvento(evento: Evento) : Observable<any> {
    return this.http.post(this.url, evento);
  }

  deleteEvento(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

  getEvento (id: any) : Observable<any> {
    return this.http.get(this.url+id);
  }

  updateEvento(id: any, evento: Evento) : Observable<any> {
    return this.http.patch(this.url+id, evento);
  }

}
