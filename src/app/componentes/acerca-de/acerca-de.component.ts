import { Component, OnInit } from '@angular/core';
import { acerca_de } from '../Model/acerca_de';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  acerca_de: acerca_de [] = [];

  constructor(public acercaDeService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarAcercaDe()
  }

  cargarAcercaDe(): void {
    console.log('algo')
    this.acercaDeService.listaAcercade().subscribe(data => this.acerca_de = data)
  }
}

