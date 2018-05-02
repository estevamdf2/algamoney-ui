import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    {nome: 'Dercy Gonçalves Gomes da Silva Sauro', cidade: 'Uberaba', estado: 'MG', status: false},
    {nome: 'Mauro Halfeld', cidade: 'São Paulo', estado: 'SP', status: true},
    {nome: 'Bruna Marquezine', cidade: 'Rio grande do Sul', estado: 'RS', status: true},
    {nome: 'Ayrton Senna', cidade: 'São Paulo', estado: 'SP', status: false}
  ];
}
