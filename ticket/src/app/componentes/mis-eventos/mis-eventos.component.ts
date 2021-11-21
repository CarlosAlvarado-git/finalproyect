import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {
  eventoId = {Id:'comienzo'}
  eventos: any = [];
  eventosAsistencia: any = [];
  evento = {
    id_evento:''
  }
  public imagen:string;
  url_api = 'http://localhost:3000/mis-eventos'
  url_api2 = 'http://localhost:3000/obtener-eventos-asistencia'
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.imagen ="";
  }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.http.get(this.url_api).subscribe(
      res => {
        this.eventos = res;
      },
      err => console.log(err)
    )

    this.http.get(this.url_api2).subscribe(
      res => {
        this.eventosAsistencia = res;
      },
      err => console.log(err)
    )
  }


  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

  eliminarEvento(val:any){
    this.evento['id_evento'] = Object.keys(val)[0]
    this.authService.eliminarEvento(this.evento)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
    console.log(this.eventoId.Id)

  }
}
