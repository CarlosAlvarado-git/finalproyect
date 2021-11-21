import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { MisEventosComponent } from './componentes/mis-eventos/mis-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    EventosComponent,
    CrearEventoComponent,
    MisEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MisEventosComponent,
    CrearEventoComponent,
    EventosComponent,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
