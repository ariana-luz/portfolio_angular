import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from '../acerca-de/Model/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: persona = new persona("","","","","","","","","");
  educacionList:any;
  experienciaList:any;
  miPortfolio:any;
  proyectosList:any;
  certificacionesList:any;

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.educacionList=data.education})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.experienciaList=data.experience})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.proyectosList=data.projects})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.certificacionesList=data.certifications})
  }

}
