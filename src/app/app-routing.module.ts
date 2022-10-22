import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'perfil',component:PerfilComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'perfil',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
