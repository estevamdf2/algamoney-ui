import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toast: ToastyService) { }

  handle(errorResponse: any){
    let msg: string;

    if (typeof errorResponse === 'string'){
      msg = errorResponse;
    } else{
      msg = 'Erro ao processar um serviço.'
      console.log('Ocorreu um erro',errorResponse);
    }

    this.toast.error(msg);
  }
}
