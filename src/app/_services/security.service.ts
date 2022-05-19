import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { Security } from '../_models/security';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private securities$ = new BehaviorSubject<Security[]>([]);

  constructor() {
    const securities: Security[] = [
      {id: '1', name: 'PMAP', description: 'PMAP something', denomination: 1000, interest: 0.025},
      {id: '2', name: 'EMAP', description: 'EMAP something', denomination: 1, interest: 0.03},
      {id: '3', name: 'FMAP', description: 'FMAP something', denomination: 5000, interest: 0.014},
      {id: '4', name: 'GMAP', description: 'GMAP something', denomination: 10000, interest: 0.025},
      {id: '5', name: 'HMAP', description: 'HMAP something', denomination: 1000, interest: 0.034},
      {id: '6', name: 'JMAP', description: 'JMAP something', denomination: 1, interest: 0.023}
    ];
    this.securities$.next(securities);
  }

  get securities() {
    return this.securities$.asObservable();
  }

  deleteSecurity(id: string, securities: Security[]){
    return this.securities$.next(securities.filter(b => b.id !== id));
  }

  getSecurity(id: string): Security{
    return this.securities$.getValue().filter(x => x.id === id)[0];
  }
}
