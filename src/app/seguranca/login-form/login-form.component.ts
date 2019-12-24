import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { 
    console.log('auth');
    console.log(this.auth);
  }

  ngOnInit() {
  }

  login(usuario: string, senha: string){

    this.auth.login(usuario,senha)
    .then(() =>{
      this.router.navigate(['/lancamentos']);
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    })
   
  }

}
