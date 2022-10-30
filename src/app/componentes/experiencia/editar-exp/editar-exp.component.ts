import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../Model/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  experiencia: Experiencia = new Experiencia('', '', '', '');

  constructor(private experienciaService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detailExperiencia(id).subscribe(data => {
      this.experiencia = data;
      console.log(data)
      console.log(this.experiencia)
    }, err => {
      alert("Error al editar");
      this.router.navigate(['/portfolio']);
    }
    )
  }

  update(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.editarExperiencia(id, this.experiencia).subscribe(data => {
      this.router.navigate(['']);
      console.log(this.experiencia)
    }, err => {
      alert("Error al editar experiencia");
      this.router.navigate(['/portfolio']);
    }
    )
  }

}
