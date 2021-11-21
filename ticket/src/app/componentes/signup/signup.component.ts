import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user ={nombre:'', apellido:'', email:'', password:'', region:''}
  public imagen:string;
  public fondo:string;
  constructor(
      private authService:AuthService,
      private router: Router
    )
    {
      this.imagen ="";
      this.fondo="";
    }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.fondo = "../../../assets/fondo.png"
  }


  signUp(){
    if(this.user['nombre'] == '' || this.user['apellido'] == '' || this.user['email'] == '' || this.user['password'] == '' || this.user['region'] == '')
    {
      return alert('Debe llenar todos los campos')
    }
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/eventos'])
        },
        err => console.log(err)
      )

  }

}
