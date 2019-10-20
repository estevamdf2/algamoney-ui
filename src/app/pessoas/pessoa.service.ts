import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  nome: string;  
  pagina = 0;
  itensPorPagina = 2;
}

@Injectable()
export class PessoaService {  

  pessoasUrl = 'http://localhost:8080/pessoas';
  
  constructor(private http: Http){ }


  pesquisar(filtro: PessoaFiltro):Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5ODY4NCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiYjEyZTJkZDUtYWFhNy00N2ZkLThjZTMtZWM1OGRiOTU3ZmI4IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.bk37txHLPa1FDPRnVQAppDV3qlFapyfCquQ-4cG-ALQ');

    params.set('page',filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());
    

    if(filtro.nome){
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`,
      {headers, search: params})
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

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5Njc5NywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZWZmODIzYTEtZjNiOC00M2I0LTk5NTQtMmVkMzc3ZmQwMWY5IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.H_3FSnT-BNJbAW2csTjilAVkT79spTw1uhlfDpK4AIY');

    return this.http.get(this.pessoasUrl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(codigo: number):Promise<void>{

    console.log('codigo ',codigo);
    codigo == 1;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTcxNTk3OTc5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI1NTE1ZTI5MC0yNmZjLTQ1OWEtOWIzNC0yMDYxZDYyM2ViMTAiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.WlqUPhdkyzH62Qzm0g_plXfi35DDj0bmaDWY_09TQTE');
    
    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers})
      .toPromise()
      .then(() => null);
  }

}
