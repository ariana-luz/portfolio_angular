import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { acerca_de } from '../Model/acerca_de';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acerca_de: acerca_de = new acerca_de("",);
  miPortfolio:any;

  constructor(public datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getAcerca_de().subscribe(data => {this.acerca_de = data});
    this.datosPortfolio.obtenerDatos().subscribe(data=>this.miPortfolio=data)

  }

}

