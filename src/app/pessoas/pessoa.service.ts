import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';


export class PessoaFiltro {
  nome: string;  
  pagina = 0;
  itensPorPagina = 1;
}


@Injectable()
export class PessoaService {  

  pessoasUrl = 'http://localhost:8080/pessoas';
  
  constructor(private http: Http){ }


  pesquisar(filtro: PessoaFiltro):Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU0MDIwMCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiOWJjMTFjNTMtNjAyZC00MmRlLWI0ZjQtNjljOGQxODY0ZGFhIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.nFaPaDDhuA21j1Wjd2gM-Ac7rRSx8ui0gjNtTOJDS24');

    params.set('page',filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());
    // console.log(params);

    if(filtro.nome){
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`,
      {headers, search: filtro})
      .toPromise()
      .then(response =>{
        const responseJson = response.json();
        const pessoas = responseJson.content;
        
        const resultado ={
          pessoas: pessoas,
          total: responseJson.totalElements
        }
        
        return resultado;
      });
    
  }

}
