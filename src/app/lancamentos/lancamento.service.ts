import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl= 'http://localhost:4200/lancamentos';
  

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFiltro) :Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MDU1MTYyNSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZTg5ZWQ4ODItNmNkYi00NDUyLWE3OTUtNTIzMGNjMWFmMThlIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.IsMNfxABG-yArt_9XeRqZuDgMca7GSporSKd3PYJr-E');

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

    return this.http.get(`${this.lancamentosUrl}?resumo`,
      { headers, search: filtro })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos: lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }
}
