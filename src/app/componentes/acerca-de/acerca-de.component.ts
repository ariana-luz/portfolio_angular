import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { persona } from './Model/Persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio:any;
  persona: persona = new persona("","","","","","","","","");

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {this.persona = data})
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)
  }

}

