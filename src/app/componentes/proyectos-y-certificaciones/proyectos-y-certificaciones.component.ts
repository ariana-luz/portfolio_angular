import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from '../acerca-de/Model/Persona';

@Component({
  selector: 'app-proyectos-y-certificaciones',
  templateUrl: './proyectos-y-certificaciones.component.html',
  styleUrls: ['./proyectos-y-certificaciones.component.css']
})
export class ProyectosYCertificacionesComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
  }
}