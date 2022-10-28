import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../Model/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencia: Experiencia[] = [];

  constructor(private experienciaService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarExperiencia()
  }

  cargarExperiencia(): void {
    console.log('algo')
    this.experienciaService.listaExperiencia().subscribe(data => this.experiencia = data)
  }

}
