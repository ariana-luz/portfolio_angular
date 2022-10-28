import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { certificaciones } from '../Model/certificaciones';
import { proyectos } from '../Model/proyectos';

@Component({
  selector: 'app-proyectos-y-certificaciones',
  templateUrl: './proyectos-y-certificaciones.component.html',
  styleUrls: ['./proyectos-y-certificaciones.component.css']
})
export class ProyectosYCertificacionesComponent implements OnInit {
  proyectos: proyectos[] = [];
  certificaciones: certificaciones[] = [];


  constructor(private proyectosycertificacionesService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    this.cargarCertificaciones();
  }

  cargarProyectos(){
  this.proyectosycertificacionesService.listaProyectos().subscribe(data=>this.proyectos=data);
  }

  cargarCertificaciones(){
  this.proyectosycertificacionesService.listaCertificaciones().subscribe(data=>this.certificaciones=data)
  }
}
