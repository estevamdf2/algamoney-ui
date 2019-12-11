import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';

import { CategoriaPesquisaComponent } from './categorias/categoria-pesquisa/categoria-pesquisa.component';
import { AppRoutingModule } from './app-routing-module';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaPesquisaComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Importando modulos criados
    LancamentosModule,
    PessoasModule,
    SegurancaModule,
    CoreModule,        
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
