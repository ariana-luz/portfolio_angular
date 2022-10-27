import { Component, OnInit } from '@angular/core';
import { educacion } from '../Model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: educacion[] = [];

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.lista().subscribe(data => { this.educacion = data })
  }

}
