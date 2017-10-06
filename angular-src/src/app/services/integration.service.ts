import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class IntegrationService {

  //Observables boolean sources
  public novoCadastroSource = new Subject<boolean>();

  //Observable streams
  novoCadastro$ = this.novoCadastroSource.asObservable();

  //Commands

  novoCadastro(NovoCadastro: boolean){
    this.novoCadastroSource.next(NovoCadastro);
  }

  constructor() { }

}
