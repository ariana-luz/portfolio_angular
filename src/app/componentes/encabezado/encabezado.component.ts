import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from 'src/app/componentes/Model/persona'

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","","","","","","","");
  educacionList:any;
  experienciaList:any;
  miPortfolio:any;
  company: any;
  school: any;

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
    this.datosPortfolio.getCompany().subscribe(data => {this.company = data})
    this.datosPortfolio.getSchool().subscribe(data => {this.school = data})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.educacionList=data.education})
    this.datosPortfolio.obtenerDatos().subscribe(data=>{this.experienciaList=data.experience})
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
  }
}
