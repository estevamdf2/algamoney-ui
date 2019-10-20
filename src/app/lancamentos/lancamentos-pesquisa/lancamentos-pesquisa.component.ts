import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';

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

  constructor(
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService){
    
  }

  ngOnInit() { }

  pesquisar(pagina = 0){
    
    this.filtro.pagina = pagina;     

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {   
        console.log('pesquisar res',resultado);
        this.totalRegistros = resultado.total;      
        this.lancamentos = resultado.lancamentos;        
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent){  

    const pagina = event.first / event.rows;
    console.log('pagina ',pagina);
    this.pesquisar(pagina);
  }

confirmarExclusao(lancamento: any){

  this.confirmation.confirm({
    message: 'Tem certeza que deseja excluir ?',
    accept: () => {
      this.excluir(lancamento);
    }, 

  });

}

excluir(lancamento: any){
    
  this.lancamentoService.excluir(lancamento.codigo)
    .then(() =>{
      console.log('excluido ');

      if(this.grid.first === 0){
        this.pesquisar(); //esta na 1º página chamar o pesquisar novamente
      } else {
        this.grid.first = 0; // Quero a primeira página da tabela.
      }
      
      this.toasty.success('Lançamento excluído com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

}
