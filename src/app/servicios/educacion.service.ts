import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../componentes/Model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url='http://localhost:8080/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<educacion[]>{
    console.log(this.httpClient.get<educacion[]>(this.url + 'educacion/traer'))
    return this.httpClient.get<educacion[]>(this.url + 'educacion/traer');
  }

}
