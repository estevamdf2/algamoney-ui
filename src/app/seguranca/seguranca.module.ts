import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ButtonModule, InputTextModule } from "primeng/primeng";

import { LoginFormComponent } from "./login-form/login-form.component";
import { SegurancaRoutingModule } from "./seguranca-routing-module";

@NgModule({
    imports: [      
      FormsModule,      
      ButtonModule,
      InputTextModule,                  
      RouterModule,
      SegurancaRoutingModule 
    ],
    declarations: [
      LoginFormComponent
    ],
    exports: []
  })
  export class SegurancaModule { }