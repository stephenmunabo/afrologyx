import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { filter, map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
      (!authenticated) this.router.navigate(['/login/action']);
      })
  }
}
