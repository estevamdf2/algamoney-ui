import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TabViewModule, DataTableModule, InputTextareaModule, CalendarModule, InputMaskModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    // exigido pelo CalendarModule do primeNg
    BrowserAnimationsModule,
    TabViewModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
