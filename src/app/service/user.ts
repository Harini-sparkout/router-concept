import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {
    
  submitEvent$ = new Subject<void>();
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private queryParamSubject = new BehaviorSubject<{ refcode: string; theme: string }>({ refcode: '', theme: '' });
  queryParams$ = this.queryParamSubject.asObservable();
  setUser(user: any) {
    this.userSubject.next(user);
  }
   setQueryParams(refcode: string, theme: string) {
    this.queryParamSubject.next({ refcode, theme });
}
}
