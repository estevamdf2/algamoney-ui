import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ButtonModule, InputTextModule } from "primeng/primeng";

import { LoginFormComponent } from "./login-form/login-form.component";
import { SegurancaRoutingModule } from "./seguranca-routing-module";


@NgModule({
    imports: [   
      CommonModule,   
      FormsModule,           
      InputTextModule,                  
      ButtonModule,
      SegurancaRoutingModule 
    ],
    declarations: [LoginFormComponent],
    exports: []
  })
  export class SegurancaModule { }