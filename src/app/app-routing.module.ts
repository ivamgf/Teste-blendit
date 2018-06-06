// Import Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Application
import { HomeComponent } from './views/pages/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RecuperarSenhaComponent } from './views/recuperar-senha/recuperar-senha.component';
import { EstadosComponent } from './views/estados/estados.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { TemasComponent } from './views/pages/temas/temas.component';
import { SegmentosComponent } from './views/pages/segmentos/segmentos.component';
import { TransparenciaComponent } from './views/pages/transparencia/transparencia.component';
import { PlanilhasComponent } from './views/pages/planilhas/planilhas.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },

  {
      path: 'home',
      component: HomeComponent
  },

  {
      path: 'login',
      component: LoginComponent
  },

  {
      path: 'register',
      component: RegisterComponent
  },

  {
      path: 'recuperrar-senha',
      component: RecuperarSenhaComponent
  },

  {
      path: 'nos-estados',
      component: EstadosComponent
  },

  {
      path: 'contatos',
      component: ContatosComponent
  },

  {
      path: 'temas',
      component: TemasComponent
  },

  {
      path: 'segmentos',
      component: SegmentosComponent
  },

  {
      path: 'transparencia',
      component: TransparenciaComponent
  },

  {
      path: 'planilhas',
      component: PlanilhasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
