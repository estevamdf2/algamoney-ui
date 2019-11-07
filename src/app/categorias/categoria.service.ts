import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class CategoriaFiltro{
    nome: String;
}


@Injectable()
export class CategoriaService {

    categoriaUrl = 'http://localhost:8080/categorias';
    constructor(private http: Http){ }

    listarTodas(): Promise<any> {        
        const headers = new Headers();
        headers.append('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCJdLCJub21lIjoiQWRtaW5pc3RyYWRvciIsImV4cCI6MTU3MzE0NjU5NiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiXSwianRpIjoiMzdhYzFmMzMtNTdhMS00OTdmLTkyYTktOWU5MzNjMzgwY2M4IiwiY2xpZW50X2lkIjoibW9iaWxlIn0.PYHAaGQvsisaq5qGjEjFYf5TnR7_2-8jB86J6ek1-w0');

        return this.http.get(this.categoriaUrl, {headers})
            .toPromise()
            .then(response => response.json());
    }

}