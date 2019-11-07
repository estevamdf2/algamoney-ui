import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { Lancamento } from '../core/model';

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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MzE0NDU4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZDZiMDBiMDktYzE2OS00MWUxLThlMWYtYmUyMmNlMTY4NDUyIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.8RZ99yIWopQcdR1kG9m9pQVpg8K7DzNJDBk-yTNk2jo');

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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MjU0MTQ1NiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZDkwNTY3MTEtNzc5NC00YzVmLWI4NGUtNGVmNTQ5NmIxNTEwIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.BxtWwyEDJdv1iY2sCTyiUWu0TwbeV6_HLEYspGBprMc');
    
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers})
      .toPromise()
      .then(() => null);

  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {

    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MzE0NDU4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZDZiMDBiMDktYzE2OS00MWUxLThlMWYtYmUyMmNlMTY4NDUyIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.8RZ99yIWopQcdR1kG9m9pQVpg8K7DzNJDBk-yTNk2jo');
    headers.append('Content-Type', 'application/json');    

    console.log('lancamento ',lancamento);
    return this.http.post(this.lancamentosUrl, JSON.stringify(lancamento), {headers})
      .toPromise()
      .then(response => response.json());

  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {

    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MzE0NDU4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZDZiMDBiMDktYzE2OS00MWUxLThlMWYtYmUyMmNlMTY4NDUyIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.8RZ99yIWopQcdR1kG9m9pQVpg8K7DzNJDBk-yTNk2jo');
    headers.append('Content-Type', 'application/json');    

    console.log('lancamento ',lancamento);
    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`,JSON.stringify(lancamento), {headers})
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response.json() as Lancamento;

        this.converterStringsParaDatas([lancamentoAlterado]);

        return lancamento;
      });

  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {

    const headers = new Headers();
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MzE0NDU4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiZDZiMDBiMDktYzE2OS00MWUxLThlMWYtYmUyMmNlMTY4NDUyIiwiY2xpZW50X2lkIjoibW9iaWxlIn0.8RZ99yIWopQcdR1kG9m9pQVpg8K7DzNJDBk-yTNk2jo');
    headers.append('Content-Type', 'application/json');    

    return this.http.get(`${this.lancamentosUrl}/${codigo}`, { headers})
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Lancamento;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;

      });       
      
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}
