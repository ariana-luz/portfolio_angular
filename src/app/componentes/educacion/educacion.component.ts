import { Component, OnInit } from '@angular/core';
import { Educacion } from '../Model/Educacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarEducacion()
  }
  
  cargarEducacion(): void {
    console.log('algo')
    this.educacionService.listaEducacion().subscribe(data => this.educacion = data)
  }
}
