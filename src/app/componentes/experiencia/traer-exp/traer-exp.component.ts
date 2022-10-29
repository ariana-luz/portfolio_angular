import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../Model/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-traer-exp',
  templateUrl: './traer-exp.component.html',
  styleUrls: ['./traer-exp.component.css']
})
export class TraerExpComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaService: PortfolioService) { }

  ngOnInit(): void {
    this.cargarExperiencia()
  }

  cargarExperiencia(): void {
    this.experienciaService.listaExperiencia().subscribe(data => this.experiencia = data)
  }

  deleteExperiencia(id?: number) {
    if (id != undefined) {
      this.experienciaService.deleteExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Experiencia Eliminada");
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
