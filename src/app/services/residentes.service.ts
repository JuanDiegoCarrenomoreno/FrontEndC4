import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residentes } from '../models/Residentes';

@Injectable({
  providedIn: 'root'
})
export class ResidentesService {

  url : string = 'http://localhost:8000/api/residentes/';

  constructor(private http: HttpClient) { }

  getResidentes () : Observable<any> {
    return this.http.get(this.url);
  }

  addResidentes(residentes: Residentes) : Observable<any> {
    return this.http.post(this.url, residentes);
  }

  deleteResidentes(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

  getResidente (id: any) : Observable<any> {
    return this.http.get(this.url+id);
  }

  updateResidentes(id: any, residentes: Residentes) : Observable<any> {
    return this.http.patch(this.url+id, residentes);
  }
}
