import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from '../acerca-de/Model/Persona';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacionList:any;
  experienciaList:any;
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.educacionList=data.education})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.experienciaList=data.experience})
  }
}