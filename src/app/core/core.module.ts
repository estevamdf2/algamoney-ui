import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';
import { ConfirmationService } from 'primeng/primeng';
import { CategoriaService } from '../categorias/categoria.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData(localePt);
@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule    
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
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
    JwtHelperService,
    Title, 
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR'}   
  ]
})
export class CoreModule { }
