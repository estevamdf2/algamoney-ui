import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule, ToastyService } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';
import { ConfirmationService } from 'primeng/primeng';
import { CategoriaService } from '../categorias/categoria.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

registerLocaleData(localePt);
@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports:[
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule

  ],
  providers : [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ConfirmationService, 
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR'}   
  ]
})
export class CoreModule { }
