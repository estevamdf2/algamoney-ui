import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ButtonModule, InputTextModule } from "primeng/primeng";

import { SegurancaComponent } from "./login-form/seguranca.component";

@NgModule({
    imports: [      
      FormsModule,      
      ButtonModule,
      InputTextModule,                  
      RouterModule
  
    ],
    declarations: [
      SegurancaComponent
    ],
    exports: [
      SegurancaComponent,      
    ]
  })
  export class SegurancaModule { }