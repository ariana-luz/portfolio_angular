import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from '../Model/Educacion';
import { acerca_de } from '../Model/acerca_de';
import { Experiencia } from '../Model/Experiencia';
import { persona } from '../Model/persona';
import { proyectos } from '../Model/proyectos';
import { certificaciones } from '../Model/certificaciones';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  educacionList: any;
  experienciaList: any;
  miPortfolio: any;
  proyectosList: any;
  certificacionesList: any;

  constructor(public datosPortfolio: PortfolioService) { }

  acerca_de: acerca_de[] = [];
  educacion: Educacion[] = [];
  experiencia: Experiencia[] = [];
  persona: persona[] = [];
  proyectos: proyectos[] = [];
  certificaciones: certificaciones[] = [];


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => this.miPortfolio = data)
    this.datosPortfolio.obtenerDatos().subscribe(data => this.experienciaList = data.experience)
    this.datosPortfolio.obtenerDatos().subscribe(data => this.educacionList = data.education)
    this.datosPortfolio.obtenerDatos().subscribe(data => this.proyectosList = data.projects)
    this.datosPortfolio.obtenerDatos().subscribe(data => this.certificacionesList = data.certifications)
    this.cargarAcercaDe();
    this.cargarEducacion();
    this.cargarExperiencia();
    this.cargarPersona();
    this.cargarProyectos();
    this.cargarCertificaciones()
    
  }

  cargarAcercaDe(): void {
    console.log('algo')
    this.datosPortfolio.listaAcercade().subscribe(data => this.acerca_de = data)
  }

  cargarEducacion(): void {
    console.log('algo')
    this.datosPortfolio.listaEducacion().subscribe(data => this.educacion = data)
  }

  cargarExperiencia(): void {
    console.log('algo')
    this.datosPortfolio.listaExperiencia().subscribe(data => this.experiencia = data)
  }

  cargarPersona(): void {
    console.log('algo')
    this.datosPortfolio.listaPersona().subscribe(data => this.persona = data);
  }

  cargarProyectos() {
    this.datosPortfolio.listaProyectos().subscribe(data => this.proyectos = data);
  }

  cargarCertificaciones() {
    this.datosPortfolio.listaCertificaciones().subscribe(data => this.certificaciones = data)
  }
}

