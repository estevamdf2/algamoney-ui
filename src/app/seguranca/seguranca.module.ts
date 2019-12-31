import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { AuthHttp, AuthConfig } from "angular2-jwt";
import { Http, RequestOptions } from "@angular/http";

import { ButtonModule, InputTextModule } from "primeng/primeng";

import { SegurancaRoutingModule } from "./seguranca-routing-module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { AuthService } from "./auth.service";
import { MoneyHttp } from "./money-http";
import { AuthGuard } from "./auth.guard";
import { LogoutService } from "./logout.service";

export function AuthHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions){
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });
  return new MoneyHttp(auth, config, http, options);
}


@NgModule({
    imports: [   
      CommonModule,   
      FormsModule,           
      InputTextModule,                  
      ButtonModule,
      SegurancaRoutingModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return '';
          }
        }
    })
    ],
    declarations: [LoginFormComponent],
    providers: [AuthService, JwtHelperService,
      {
       provide: AuthHttp,
        useFactory: AuthHttpServiceFactory,
        deps: [AuthService, Http, RequestOptions]
      },
      AuthGuard,
      LogoutService
      
    ],
    
    exports: []
  })
  export class SegurancaModule { }