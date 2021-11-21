import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/'
  constructor(private http: HttpClient, private router:Router) { }

  signUp(user: {}){
    return this.http.post<any>(this.URL+'signup',user)
  }

  signIn(user: {}){
    return this.http.post<any>(this.URL+'signin',user)
  }

  loggedIn(){

    return !!localStorage.getItem('token');
  }

  nuevoEventos(evento: {}){
    return this.http.post<any>(this.URL+'crear-evento',evento)
  }

  eliminarEvento(evento:{}){
    return this.http.post<any>(this.URL+'eliminar-evento',evento)
  }

  asistenciaEvento(evento:{}){
    return this.http.post<any>(this.URL+'asistencia-evento',evento)
  }

  getToken(){
    console.log("entro")
    return window.localStorage.getItem('token');
  }
}
