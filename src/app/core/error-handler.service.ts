import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable()
export class ErrorHandlerService {

  constructor(private toast: ToastyService) { }

  handle(errorResponse: any){
    let msg: string;
    console.log('status', errorResponse.status);
    console.log('body', errorResponse.body);


    if (typeof errorResponse === 'string'){
      msg = errorResponse;
    } else if(errorResponse instanceof Response
      && errorResponse.status >= 400 && errorResponse.status <= 499){
      
        let errors;
        msg = 'Ocorreu um erro ao processar a sua solicitação.'
        
        try {
          errors = errorResponse.json()

          msg = errors[0].mensagemUsuario;

        } catch (error) {          
        }

        console.log('Ocorreu um erro ',errorResponse);
    } else{
      msg = "Erro ao processar um serviço remoto. Tente novamente.";
      console.error('Ocorreu um erro ',errorResponse);
    }

    this.toast.error(msg);
  }
}
