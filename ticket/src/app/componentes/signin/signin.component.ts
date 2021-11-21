import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user ={
    email:'',
    password:''
  }

  public imagen:string;
  public fondo:string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {this.imagen =""; this.fondo=""; }

  ngOnInit(): void {
    this.imagen = "../../../assets/logo.png";
    this.fondo = "../../../assets/fondo.png"
  }



  signIn(){
    if(this.user['email'] == '' || this.user['password'] == '')
    {
      return alert('Debe llenar todos los campos')
    }
    
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/eventos'])
        },
        err => {
          console.log(err);
        }
      )

  }

}
