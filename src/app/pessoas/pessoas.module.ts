import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DataTableModule} from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SharedModule } from './../shared/shared.module';
import { PessoasRoutingModule } from './pessoas-routing-module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    SharedModule,
    PessoasRoutingModule
    
  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent    
  ],
  exports: []
})
export class PessoasModule { }