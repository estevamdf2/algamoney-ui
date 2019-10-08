import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

  lancamentosUrl= 'http://localhost:4200/lancamentos';
  

  constructor(private http: Http) { }

  pesquisar() :Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MDU1MTYyNSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZTg5ZWQ4ODItNmNkYi00NDUyLWE3OTUtNTIzMGNjMWFmMThlIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.IsMNfxABG-yArt_9XeRqZuDgMca7GSporSKd3PYJr-E');


    return this.http.get(`${this.lancamentosUrl}?resumo`,{ headers })
      .toPromise()
      .then(response => response.json().content);
  }
}
