import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { PessoaService } from '../../pessoas/pessoa.service';
import { Lancamento } from '../../core/model';
import { LancamentoService } from '../lancamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const codigoLancamento = this.route.snapshot.params['codigo']
    
    if(codigoLancamento){
      this.carregarLancamento(codigoLancamento);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando(){
    return Boolean(this.lancamento.codigo);
  }

  carregarLancamento(codigo: number){
    return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias(){
    return this.categoriaService.listarTodas()
      .then(categorias =>{
        this.categorias = categorias.map(c => ({label: c.nome, value: c.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas(){
    return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => ({label: p.nome, value: p.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form:FormControl){

    this.lancamentoService.adicionar(this.lancamento)
      .then(() =>{
        this.toasty.success('Lançamento adicionado com sucesso!!! ');

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch(erro => this.errorHandler.handle(erro))

    console.log(this.lancamento);
  }

  buscarPorCodigo(codigo:number){
    return this.lancamentoService.buscarPorCodigo(codigo)
      .then(result => {
        this.lancamento = result;
      });

  }

  atualizar(form:FormControl){
    this.lancamentoService.atualizar(this.lancamento)
      .then(() => {
        this.toasty.success('Lançamento alterado com sucesso!!! ');

        form.reset();
        this.lancamento = new Lancamento();
      })
  }

}
