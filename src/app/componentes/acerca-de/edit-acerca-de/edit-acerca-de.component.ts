import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { acerca_de } from '../../Model/acerca_de';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  acerca_de: acerca_de = new acerca_de('');

  constructor(private acercadeService:PortfolioService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadeService.detailAcercaDe(id).subscribe(data => {
      this.acerca_de = data;
      console.log(data)
      console.log(this.acerca_de)
    }, err => {
      alert("Error al editar");
      this.router.navigate(['/portfolio']);
    })
  }

  update(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadeService.editarAcercaDe(id, this.acerca_de).subscribe(data => {
      this.router.navigate(['/portfolio']);
      console.log(this.acerca_de)
    }, err => {
      alert("Error al editar perfil");
      this.router.navigate(['/portfolio']);
    }
    )
  }

}