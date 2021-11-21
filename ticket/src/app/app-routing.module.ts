import { MisEventosComponent } from './componentes/mis-eventos/mis-eventos.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { SigninComponent } from './componentes/signin/signin.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'crear-evento',
    component: CrearEventoComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'mis-eventos',
    component: MisEventosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
