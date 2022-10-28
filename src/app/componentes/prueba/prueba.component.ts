import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from '../Model/Educacion';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarProductos()
  }

  cargarProductos(): void {
    console.log('algo')
    this.educacionService.listaEducacion().subscribe(data => this.educacion = data)
  }

}
