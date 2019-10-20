import { Component } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();  
  lancamentos = [];  

  constructor(private lancamentoService: LancamentoService){
    
  }

  pesquisar(pagina){
    pagina = 0;    
    this.filtro.pagina = pagina;    

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {          
        this.totalRegistros = resultado.total;      
        this.lancamentos = resultado.lancamentos;        
      });
  }

  aoMudarPagina(event: LazyLoadEvent){
    // console.log(event);
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
