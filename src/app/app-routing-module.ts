import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";

const routes: Routes = [
    {path: '', redirectTo: 'lancamentos', pathMatch: 'full'},        
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
  