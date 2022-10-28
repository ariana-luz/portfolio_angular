import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/componentes/Model/persona'
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  persona: persona [] = [];
  miportfolio: any;

  constructor(public personaService:PortfolioService) { }

  ngOnInit(): void {
    this.cargarPersona()
  }

  cargarPersona(): void {
    console.log('algo')
    this.personaService.listaPersona().subscribe(data => this.persona = data);
    this.personaService.obtenerDatos().subscribe(data=> this.miportfolio= data);
  
  }
}