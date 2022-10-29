import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProyectosYCertificacionesComponent } from './componentes/proyectos-y-certificaciones/proyectos-y-certificaciones.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { TraerExpComponent } from './componentes/experiencia/traer-exp/traer-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { CrearExpComponent } from './componentes/experiencia/crear-exp/crear-exp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ProyectosYCertificacionesComponent,
    FooterComponent,
    PerfilComponent,
    EducacionComponent,
    ExperienciaComponent,
    PruebaComponent,
    TraerExpComponent,
    EditarExpComponent,
    CrearExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
