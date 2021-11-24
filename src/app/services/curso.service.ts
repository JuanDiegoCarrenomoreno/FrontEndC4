import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url : string = 'http://localhost:8000/api/curso/';

  constructor(private http: HttpClient) { }

  getCursos () : Observable<any> {
    return this.http.get(this.url);
  }

  addCurso(curso: Curso) : Observable<any> {
    return this.http.post(this.url, curso);
  }

  deleteCurso(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

  getCurso (id: any) : Observable<any> {
    return this.http.get(this.url+id);
  }

  updateCurso(id: any, curso: Curso) : Observable<any> {
    return this.http.patch(this.url+id, curso);
  }

}
