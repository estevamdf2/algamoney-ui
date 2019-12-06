import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../../core/model';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  
  pessoa = new Pessoa();
  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova pessoa');

    const codigoPessoa = this.route.snapshot.params['codigo']

    if(codigoPessoa){
      this.carregarPessoa(codigoPessoa);
    }

  }

  novo(form: FormControl){
    console.log('novo ',form)
    form.reset(); // erro de undefined

    setTimeout(function(){
      this.pessoa = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/novo']);
  }

  get editando(){
    return Boolean(this.pessoa.codigo);
  }

  salvar(form: FormControl){

    if (this.editando){
      this.atualizarPessoa(form);
    } else{
      this.adicionarPessoa(form);
    }
    
  }

  adicionarPessoa(form: FormControl){
    
    this.pessoa.ativo = true;
    console.log('pessoa ', this.pessoa);
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.toasty.success('Pessoa adicionada com sucesso !!!');

        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

  atualizarPessoa(form: FormControl){
    
    console.log('pessoa ', this.pessoa);
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.toasty.success('Pessoa alterada com sucesso !!!');
        this.atualizarTituloEdicao();        
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

  carregarPessoa(codigo: number){

    return this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
