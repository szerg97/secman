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
      {id: '1', name: 'Prémium Magyar Állampapír 2023/J', description: 'PMAP details...', denomination: 1000, interest: 0.025},
      {id: '2', name: 'Egyéves Magyar Állampapír 2024/J', description: 'EMAP details...', denomination: 1, interest: 0.03},
      {id: '3', name: 'Féléves Magyar Állampapír 2025/I', description: 'FMAP details...', denomination: 5000, interest: 0.014},
      {id: '4', name: 'Magyar Állampapír Plusz 2023/I', description: 'MAPPlusz details...', denomination: 10000, interest: 0.025},
      {id: '5', name: 'Prémium Magyar Állampapír 2024/J', description: 'PMAP details...', denomination: 1000, interest: 0.034},
      {id: '6', name: 'Prémium Magyar Állampapír 2025/I', description: 'PMAP details...', denomination: 1, interest: 0.023}
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
