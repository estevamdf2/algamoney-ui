import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule, InputTextModule } from "primeng/primeng";

import { SegurancaRoutingModule } from "./seguranca-routing-module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthService } from "./auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";


@NgModule({
    imports: [   
      CommonModule,   
      FormsModule,           
      InputTextModule,                  
      ButtonModule,
      SegurancaRoutingModule 
    ],
    declarations: [LoginFormComponent],
    providers: [AuthService, JwtHelperService],
    exports: []
  })
  export class SegurancaModule { }