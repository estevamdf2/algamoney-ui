import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();  
  lancamentos = [];  
  //View faz referencia a #tabela lá no código.
  @ViewChild('tabela') grid;

  constructor(private lancamentoService: LancamentoService){
    
  }

  ngOnInit() { }

  pesquisar(pagina = 0){
    
    this.filtro.pagina = pagina;     

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {   
        console.log('pesquisar res',resultado);
        this.totalRegistros = resultado.total;      
        this.lancamentos = resultado.lancamentos;        
      });
  }

  aoMudarPagina(event: LazyLoadEvent){  

    const pagina = event.first / event.rows;
    console.log('pagina ',pagina);
    this.pesquisar(pagina);
  }

  excluir(lancamento: any){
    console.log('lancamento ',lancamento);
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() =>{
        console.log('excluido ');
        this.grid.first = 0; // Quero a primeira página da tabela.
      })
  }

}
