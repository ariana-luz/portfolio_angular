import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { CrearExpComponent } from './componentes/experiencia/crear-exp/crear-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { TraerExpComponent } from './componentes/experiencia/traer-exp/traer-exp.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

const routes: Routes = [
  {path:'perfil',component:PerfilComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'prueba',component:PruebaComponent},
  {path:'traer-exp',component:TraerExpComponent},
  {path:'editar-exp/:id',component:EditarExpComponent},
  {path:'crear-exp',component:CrearExpComponent},
  {path:'edit-acerca-de/:id',component:EditAcercaDeComponent},
  {path:'',redirectTo:'perfil',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
