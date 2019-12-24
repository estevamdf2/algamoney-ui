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

export function AuthHttpServiceFactory(http: Http, options: RequestOptions){
  return new AuthHttp(new AuthConfig(), http, options);
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
        deps: [Http, RequestOptions]
      }
      
    ],
    
    exports: []
  })
  export class SegurancaModule { }