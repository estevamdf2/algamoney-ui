import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class CategoriaFiltro{
    nome: String;
}


@Injectable()
export class CategoriaService {

    categoriaUrl = 'http://localhost:8080/categorias';
    constructor(private http: AuthHttp){ }

    listarTodas(): Promise<any> {        
    
        return this.http.get(this.categoriaUrl)
            .toPromise()
            .then(response => response.json());
    }

}