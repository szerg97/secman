import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Security } from '../_models/security';
import { Transaction } from '../_models/transaction';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions$ = new BehaviorSubject<Transaction[]>([]);
  private lastId = 0;
  constructor(
    private securityService: SecurityService
  ) {
    let securities: Security[] = null;
    this.securityService.securities.subscribe(data => {
      securities = data;
    });
    const transactions: Transaction[] = [
      {id: '1', faceValue: (securities[0].denomination*5),
      realValue: (securities[0].denomination*5)
      + (securities[0].denomination*5*securities[0].interest),
      security: securities[0]},
      {id: '2', faceValue: (securities[1].denomination*5),
      realValue: (securities[1].denomination*5)
      + (securities[1].denomination*5*securities[1].interest),
      security: securities[1]},
    ];
    this.transactions$.next(transactions);

    this.lastId = 2;
  }

  get transactions() {
    return this.transactions$.asObservable();
  }

  getTransaction(id: string): Transaction{
    return this.transactions$.getValue().filter(x => x.id === id)[0];
  }

  addTransaction(model: any){
    const tr = {
      id: (this.lastId + 1).toString(),
      faceValue: model.faceValue,
      realValue: model.realValue,
      security: model.security
    } as Transaction;
    this.lastId++;
    return this.transactions$.getValue().push(tr);
  }
}
