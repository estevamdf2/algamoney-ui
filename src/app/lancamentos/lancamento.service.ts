import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LancamentoService {

  lancamentosUrl= 'http://localhost:4200/lancamentos';
  

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {

    const headers = new HttpHeaders();
    headers.append('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTY5NjA2NzE3LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI3YTI4MTlhMS1mNGE3LTQ4Y2EtODI0YS0zNDc5OWU3NWVjMmEiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.v5cajKFIkYnxxr3AdzqjEqXRVQoWZsJieUGOQtuzUU0');


    return this.http.get(`${this.lancamentosUrl}?resumo`,{ headers })
      .toPromise()
      .then(response => response.json().content);
  }
}
