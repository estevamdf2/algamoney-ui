import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';


import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './pessoas/pessoa.service';



@NgModule({
  declarations: [
    AppComponent    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Importando modulos criados
    LancamentosModule,
    PessoasModule,
    CoreModule,        
    HttpModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  providers: [LancamentoService,PessoaService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
