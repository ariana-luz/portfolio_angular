import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from '../acerca-de/Model/Persona';
import { company } from '../acerca-de/Model/Company';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","","","","","","","","");
  educacionList:any;
  experienciaList:any;
  miPortfolio:any;
  // company: company = new company("","","")

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
    // this.datosPortfolio.getCompany().subscribe(data=> {this.company = data})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.educacionList=data.education})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.experienciaList=data.experience})
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
  }
}
