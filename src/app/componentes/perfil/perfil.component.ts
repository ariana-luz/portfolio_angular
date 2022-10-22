import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from 'src/app/componentes/Model/persona'
import { acerca_de } from '../Model/acerca_de';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: persona = new persona("","","","","","","","");
  acerca_de: acerca_de = new acerca_de ("")
  educacionList:any;
  experienciaList:any;
  miPortfolio:any;
  proyectosList:any;
  certificacionesList:any;

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
    this.datosPortfolio.getAcerca_de().subscribe(data => {this.acerca_de = data})
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.educacionList=data.education})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.experienciaList=data.experience})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.proyectosList=data.projects})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.certificacionesList=data.certifications})
  }

}
