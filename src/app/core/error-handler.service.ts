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
    } else{
      msg = 'Erro ao processar um serviço.'
      console.log('Ocorreu um erro',errorResponse);
    }

    if( errorResponse.status > 400 || errorResponse.status <= 499 ){
      console.log('status 4xx');
      var json = JSON.parse(errorResponse._body);
      msg = json[0].mensagemUsuario;
      
    }

    

    this.toast.error(msg);
  }
}
