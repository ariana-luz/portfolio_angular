import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acerca_de } from '../componentes/Model/acerca_de';
import { company } from '../componentes/Model/company';
import { experience } from '../componentes/Model/Experience';
import { school } from '../componentes/Model/school';
import { educacion } from '../componentes/Model/educacion';
import { persona } from 'src/app/componentes/Model/persona'


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }

  public getPersona():Observable<persona>{
    console.log(persona)
    return this.http.get<persona>(this.url+"traer/persona")
  }

  public getAcerca_de():Observable<acerca_de>{
    console.log(acerca_de)
    return this.http.get<acerca_de>(this.url+"traer/acercade")
  }
  
  public geteducacion():Observable<educacion>{
    console.log(educacion)
    return this.http.get<educacion>(this.url+"traer/educacion")
  }

  public getExperience():Observable<experience>{
    console.log(experience)
    return this.http.get<experience>(this.url+"traer/experience")
  }

  public getCompany():Observable<company>{
    console.log(company)
    return this.http.get<company>(this.url+"traer/company")
  }

  public getSchool():Observable<school>{
    console.log(school)
    return this.http.get<school>(this.url+"traer/school")
  }

//  public lista(): Observable<educacion[]>{
//   return this.http.get<educacion[]>(this.url + '/educacion/lista');
//   }

//   // public detail(id: number): Observable<educacion>{
//   //   return this.http.get<educacion>(this.url + 'educacion' + `detail/${id}`);
//   // }
//   // public save(educacion: educacion): Observable<any>{
//   //   return this.http.post<any>(this.url + 'educacion' + 'create', educacion);
//   // }
//   // public update(id: number, educacion: educacion): Observable<any>{
//   //   return this.http.put<any>(this.url + 'educacion' + `update/${id}`, educacion);
//   // }
//   public delete(id: number): Observable<any>{
//     return this.http.delete<any>(this.url + `delete/${id}`);
//   }

// }
}