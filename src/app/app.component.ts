import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.5, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '18/06/2017',
     dataPagamento: '09/06/2017', valor: 8000.00, pessoa: 'Atacado Brasil'},
    {tipo: 'RECEITA', descricao: 'Provimentos', dataVencimento: '30/11/2017',
     dataPagamento: '02/12/2017', valor: 4535.12, pessoa: 'EBC'},
    {tipo: 'DESPESA', descricao: 'Vale transporte', dataVencimento: '02/12/2017',
     dataPagamento: '02/12/2017', valor: 210, pessoa: 'df trans'}
  ];
}
