import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { PessoaService } from '../../pessoas/pessoa.service';
import { Lancamento } from '../../core/model';
import { LancamentoService } from '../lancamento.service';
import { ActivatedRoute, Router } from '@angular/router';


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
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    
    this.title.setTitle('Novo lançamento');
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
        this.atualizarTituloEdicao();
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

  salvar(form: FormControl){
    if (this.editando){
      this.atualizarLancamento(form);
    } else{
      this.adicionarLancamento(form);
    }
  }


  adicionarLancamento(form:FormControl){

    this.lancamentoService.adicionar(this.lancamento)
      .then(lancamentoAdicionado =>{
        this.toasty.success('Lançamento adicionado com sucesso!!! ');        
        this.router.navigate(['/lancamentos',lancamentoAdicionado.codigo])
      })
      .catch(erro => this.errorHandler.handle(erro))

    console.log(this.lancamento);
  }

  atualizarLancamento(form: FormControl){
    this.lancamentoService.atualizar(this.lancamento)
      .then(lancamento => {
        this.lancamento = lancamento;

        this.toasty.success('Lancamento alterado com sucesso.');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
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

  novo(form: FormControl){
    form.reset();

    setTimeout(function(){
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo'])
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de lançamentos: ${this.lancamento.descricao}`);
  }

}
