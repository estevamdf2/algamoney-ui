import { Component, ViewChild } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/primeng';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];
  @ViewChild('tabela') grid;

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
  ){ }

  pesquisar(pagina = 0){

    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {          
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;              
      })
  }

  aoMudarPagina(event: LazyLoadEvent){     
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any){

    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir '+pessoa.nome,
      accept: () =>{
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any){
    this.pessoaService.excluir(pessoa.codigo)
      .then(() =>{
        console.log('Excluindo pessoa... ');

        if(this.grid.first === 0){
          this.pesquisar();
        } else{
          this.grid.first = 0;
        }

        this.toasty.success('Pessoa excluída com sucesso.');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  ativaDesativa(pessoa:any){
    console.log('clicou ',pessoa);
    if(pessoa.ativo){
      pessoa.ativo = false;
    } else {
      pessoa.ativo = true;
    }

    this.pessoaService.ativaDesativa(pessoa)
      .then(() => {
        console.log('atualizando contato');
      })
    
  }

}
