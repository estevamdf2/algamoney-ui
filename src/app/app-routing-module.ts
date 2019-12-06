import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PessoasPesquisaComponent } from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";
import { PessoaCadastroComponent } from "./pessoas/pessoa-cadastro/pessoa-cadastro.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";

const routes: Routes = [
    {path: '', redirectTo: 'lancamentos', pathMatch: 'full'},    
    {path: 'pessoas', component: PessoasPesquisaComponent},
    {path: 'pessoas/novo', component: PessoaCadastroComponent},
    {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
    {path: '**', redirectTo: 'pagina-nao-encontrada'}
  
  
  ];
  
  @NgModule({
    
    imports: [    
      RouterModule.forRoot(routes)
    ],
    //Para acesso as diretivas do routerModule como o
    //routerLink
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  