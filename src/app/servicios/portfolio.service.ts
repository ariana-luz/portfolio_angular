import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acerca_de } from '../componentes/Model/acerca_de';
import { company } from '../componentes/Model/company';
import { experience } from '../componentes/Model/Experience';
import { school } from '../componentes/Model/school';
import { education } from '../componentes/Model/education';
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
  
  public getEducation():Observable<education>{
    console.log(education)
    return this.http.get<education>(this.url+"traer/education")
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

//  public lista(): Observable<education[]>{
//   return this.http.get<education[]>(this.url + '/education/lista');
//   }

//   // public detail(id: number): Observable<education>{
//   //   return this.http.get<education>(this.url + 'education' + `detail/${id}`);
//   // }
//   // public save(education: education): Observable<any>{
//   //   return this.http.post<any>(this.url + 'education' + 'create', education);
//   // }
//   // public update(id: number, education: education): Observable<any>{
//   //   return this.http.put<any>(this.url + 'education' + `update/${id}`, education);
//   // }
//   public delete(id: number): Observable<any>{
//     return this.http.delete<any>(this.url + `delete/${id}`);
//   }

// }
}