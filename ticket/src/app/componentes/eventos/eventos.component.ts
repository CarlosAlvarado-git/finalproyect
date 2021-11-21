import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  //eventos ={id:'', nombre:'', descripcion:'', categoria:'', fecha:'',boletos:'',ubicacion:'',boletosmax:'',fechamax:''}
  informacion = {idUsuario:'',idEvento:'',boletos:''}
  eventos: any = [];
  public imagen:string;
  evento = {
    idUsuario:'',
    id_evento:''
  }

  url_api = 'http://localhost:3000/eventos'
  constructor(private http: HttpClient,private router: Router, private authService: AuthService) {
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

  }

  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

  comprarBoletos(val:any){
    //this.informacion.boletos = val["Boletos"]
    this.evento['idUsuario'] = <string>window.localStorage.getItem('token');
    this.evento['id_evento'] = Object.keys(val)[0];
    this.authService.asistenciaEvento(this.evento)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mis-eventos'])
        },
        err => {
          console.log(err);
        }
      )
    this.router.navigate(['/mis-eventos'])
  }

}
