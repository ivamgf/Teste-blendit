import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { NavComponent } from './views/nav/nav.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RecuperarSenhaComponent } from './views/recuperar-senha/recuperar-senha.component';
import { EstadosComponent } from './views/estados/estados.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { TemasComponent } from './views/pages/temas/temas.component';
import { SegmentosComponent } from './views/pages/segmentos/segmentos.component';
import { TransparenciaComponent } from './views/pages/transparencia/transparencia.component';
import { PlanilhasComponent } from './views/pages/planilhas/planilhas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarSenhaComponent,
    EstadosComponent,
    ContatosComponent,
    TemasComponent,
    SegmentosComponent,
    TransparenciaComponent,
    PlanilhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
