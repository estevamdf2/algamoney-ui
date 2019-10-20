import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 2;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl= 'http://localhost:8080/lancamentos';
  

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFiltro) :Promise<any> {    

    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5NTYzMywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZTk2MTZlODktNjJjYS00YTg1LWFkZjAtNDg5NzZhZjNlMTA5IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.2rtkOG1Mwl66Wzp3EREZLsWslEyjRYUSP8x929lI684');

    params.set('page',filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());
    
    if(filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio){
      params.set('dataVencimentoDe', 
        moment(filtro.dataVencimentoInicio).format("YYYY-MM-DD"));
    }

    if(filtro.dataVencimentoFim){
      params.set('dataVencimentoAte', 
        moment(filtro.dataVencimentoFim).format("YYYY-MM-DD"));
    }

    console.log('params ',params);
    return this.http.get(`${this.lancamentosUrl}?resumo`,
      { headers, search: params })
      .toPromise()
      .then(response => {        
        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  excluir(codigo: number):Promise<void>{

    console.log('codigo ',codigo);
    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MTU5MzM1NSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiOGIyODliOGItNjYxYy00ODcxLThmYzUtODdkZWZhMzQyMWExIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.UisB0kMA4Q0CNMhnTSROouT4KJqbiHhST7bCjo15Eus');
    
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers})
      .toPromise()
      .then(() => null);

  }
}
