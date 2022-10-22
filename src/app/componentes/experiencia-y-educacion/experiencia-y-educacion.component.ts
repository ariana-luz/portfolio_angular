import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacionList: any;
  experienciaList: any;
  miPortfolio: any;
  experience: any;
  education: any;
  company: any;
  school: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getExperience().subscribe(data => { this.experience = data })
    this.datosPortfolio.getEducation().subscribe(data => { this.education = data })
    this.datosPortfolio.getCompany().subscribe(data => { this.company = data })
    this.datosPortfolio.getSchool().subscribe(data => { this.school = data })
    this.datosPortfolio.obtenerDatos().subscribe(data => this.miPortfolio = data)
    this.datosPortfolio.obtenerDatos().subscribe(data => { this.educacionList = data.education })
    this.datosPortfolio.obtenerDatos().subscribe(data => { this.experienciaList = data.experience })

  }
 }