import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos-y-certificaciones',
  templateUrl: './proyectos-y-certificaciones.component.html',
  styleUrls: ['./proyectos-y-certificaciones.component.css']
})
export class ProyectosYCertificacionesComponent implements OnInit {
  proyectosList:any;
  certificacionesList:any;
  miPortfolio:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.proyectosList=data.projects})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.certificacionesList=data.certifications})
  }
}