import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../componentes/acerca-de/Model/Persona';
import { company } from '../componentes/acerca-de/Model/Company';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public getPersona():Observable<persona>{
    console.log(persona)
    return this.http.get<persona>(this.url+"traer/persona")
  }

  obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }
  
}

  