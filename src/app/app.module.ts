import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabViewModule, DataTableModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';



@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
