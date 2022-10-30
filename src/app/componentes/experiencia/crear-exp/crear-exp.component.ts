import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../../Model/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-crear-exp',
  templateUrl: './crear-exp.component.html',
  styleUrls: ['./crear-exp.component.css']
})
export class CrearExpComponent implements OnInit {
  company: string = '';
  position: string = '';
  img: string = '';
  url: string = '';

  constructor(private experienciaService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
    
  }

  crearExperiencia(): void {
    const experiencia = new Experiencia(this.company, this.position, this.img, this.url);
    this.experienciaService.saveExperiencia(experiencia).subscribe(data => {
      alert("Experiencia agregada correctamente");
      this.router.navigate(['/portfolio']);
    }, err=>{
      alert("falló");
      this.router.navigate(['/portfolio']);
    }
    )
  }
}