import { MisEventosComponent } from './../mis-eventos/mis-eventos.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {EventosComponent} from '../eventos/eventos.component'
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  evento = {
    idUsuario:'',
    nombre:'',
    descripcion: '',
    categoria: '',
    fecha: '',
    precio: '',
    ubicacion: '',
    boletosmax: '',
    fechamax: ''
  }
  
  url_api = 'http://localhost:3000/mis-eventos';
  public imagen:string;
  constructor(
    private eventos_componente: EventosComponent,
    private mis_eventos: MisEventosComponent,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.imagen ="";

  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.evento.idUsuario = <string>window.localStorage.getItem('token');
    this.http.get(this.url_api).subscribe(
      res => {
       this.mis_eventos.eventos = res;
      },
      err => console.log(err)
    )
  }

  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

  crearEvento(){
    //console.log(this.evento['nombre']);
    //console.log(this.evento['descripcion']);
    //console.log(this.evento['categoria']);
    //console.log(this.evento['fecha']);
    //console.log(this.evento['precio']);
    //console.log(this.evento['ubicacion']);
    //console.log(this.evento['boletosmax']);
    //console.log(this.evento['fechamax']);

    this.authService.nuevoEventos(this.evento)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mis-eventos'])
        },
        err => {
          console.log(err);
        }
      )

      this.http.get(this.url_api).subscribe(
        res => {
         this.mis_eventos.eventos = res;
        },
        err => console.log(err)
      )


  }

}
