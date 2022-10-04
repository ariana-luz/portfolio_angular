import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosYCertificacionesComponent } from './proyectos-y-certificaciones.component';

describe('ProyectosYCertificacionesComponent', () => {
  let component: ProyectosYCertificacionesComponent;
  let fixture: ComponentFixture<ProyectosYCertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosYCertificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosYCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
