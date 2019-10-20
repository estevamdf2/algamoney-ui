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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5Njc5NywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZWZmODIzYTEtZjNiOC00M2I0LTk5NTQtMmVkMzc3ZmQwMWY5IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.H_3FSnT-BNJbAW2csTjilAVkT79spTw1uhlfDpK4AIY');

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
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5NzIxNiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiMTk0NWMzYjktZGYzNi00MjY5LWIyYTAtMDg0NWRiNTk4N2UwIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.AQ4tYZGGtvVqYMi3tGtXKe7y2pJauVuDj437GYtBUGw');
    
    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers})
      .toPromise()
      .then(() => null);
  }

}
