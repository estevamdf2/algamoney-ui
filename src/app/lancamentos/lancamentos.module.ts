import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { SharedModule } from './../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask/src/currency-mask.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    SharedModule,
    RouterModule

  ],
  declarations: [
    LancamentoCadastroComponent,    
    LancamentosPesquisaComponent
  ],
  exports: []
})
export class LancamentosModule { }
