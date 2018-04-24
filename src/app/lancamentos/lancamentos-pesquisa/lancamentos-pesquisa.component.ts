import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
     dataPagamento: null, valor: 4.5, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 6, 18),
     dataPagamento: new Date(2017, 9, 9), valor: 8000.00, pessoa: 'Atacado Brasil'},
    {tipo: 'RECEITA', descricao: 'Provimentos', dataVencimento: new Date(2017, 11, 30),
     dataPagamento: new Date(2017, 12, 2) , valor: 4535.12, pessoa: 'EBC'},
    {tipo: 'DESPESA', descricao: 'Vale transporte', dataVencimento: new Date(2017, 12, 2),
     dataPagamento: new Date(2017, 12, 2), valor: 210, pessoa: 'df trans'}
  ];

}
