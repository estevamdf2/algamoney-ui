import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TabViewModule, DataTableModule, InputTextareaModule, CalendarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    MessageComponent,
    PessoasGridComponent
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
    
    //Importando modulo de lancamentos
    LancamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
