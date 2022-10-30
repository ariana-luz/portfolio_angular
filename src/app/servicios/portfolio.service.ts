import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acerca_de } from '../componentes/Model/acerca_de';
import { proyectos } from '../componentes/Model/proyectos';
import { certificaciones } from '../componentes/Model/certificaciones';
import { Experiencia } from '../componentes/Model/Experiencia';
import { persona } from 'src/app/componentes/Model/persona';
import { Educacion } from '../componentes/Model/Educacion';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url ="http://localhost:8080/";

  constructor(private httpClient:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.httpClient.get('/assets/data/data.json');
  }

  public listaAcercade(): Observable<acerca_de[]> {
    return this.httpClient.get<acerca_de[]>(this.url + 'acercade/traer');
  }

  public editarAcercaDe(id:number, acerca_de: acerca_de): Observable<any> {
    return this.httpClient.put<any>(this.url + `acercade/editar/${id}`, acerca_de);
  }

  public detailAcercaDe(id: number): Observable<acerca_de>{
    return this.httpClient.get<acerca_de>(this.url + `acercade/detail/${id}`);
  }

  public listaEducacion(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'educacion/traer');
  }

  public listaExperiencia(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'experiencia/traer');
  }

  public listaPersona(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.url + 'persona/traer');
  }

  public listaProyectos(): Observable<proyectos[]>{
    return this.httpClient.get<proyectos[]>(this.url + 'proyectos/traer');
  }

  public listaCertificaciones(): Observable<certificaciones[]>{
    return this.httpClient.get<certificaciones[]>(this.url + 'certificaciones/traer');
  }

  public detailExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `experiencia/detail/${id}`);
  }

  public saveExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'experiencia/crear', experiencia);
  }

  public editarExperiencia(id:number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `experiencia/editar/${id}`, experiencia);
  }

  public deleteExperiencia(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `experiencia/borrar/${id}`);
  }

}

