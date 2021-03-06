import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl:string;   
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelperService
  ){
    this.carregarToken();
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
  }

  login(usuario: string, senha: string): Promise<void>{

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Autorization' , 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;    

    return this.http.post(this.oauthTokenUrl, body,
       { headers, withCredentials: true} )
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response.json().access_token);
      })
      .catch(response => {
        
        if(response.status == 400){
          const responseJson = response.json();

          if(responseJson.error === 'invalid_grant'){
            return Promise.reject('Usuário ou senha inválida');
          }
        }

        return Promise.reject(response);
      })
  }

  private armazenarToken(token: string){
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken(){
    const token = localStorage.getItem('token');

    if(token){
      this.armazenarToken(token);
    }

  }

  obterNovoAccessToken(): Promise<void> {
    const body = 'grant_type=refresh_token';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Autorization' , 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    return this.http.post(this.oauthTokenUrl, body,
       {headers, withCredentials: true})
    .toPromise()
    .then(response => {
      this.armazenarToken(response.json().access_token);
    })
    .catch(response =>{
      console.error('Erro ao renovar token ',response);
      return Promise.resolve(null);
    });
  }

  limparAccessToken(){
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido(){
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  public temPermissao(permissao: string){
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles){
    for (const role of roles) {
      if(this.temPermissao(role)){
        return true;
      }
    }
    return false;
  }

}
