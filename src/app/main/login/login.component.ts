import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { environment } from '../../../environments/environment';
import { BackEndService } from '../../main/services/back-end.service';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialAuth: boolean = false; // show Google and FB Sign in only when social auth is enabled
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;

  constructor(private afAuth: AngularFireAuth, private _router: Router, private _backendService: BackEndService) { }

  ngOnInit() {
    if(environment.socialAuthEnabled) {
      this.socialAuth = true; // show Google and FB Sign in only when social auth is enabled
    }
  }

  ngAfterViewInit(){
    this.getAuthStatus();
    if(this.afAuth.authState) {
      this._router.navigate(['/discover/events/go']);
    }
  }


  getAuthStatus(){
    this._backendService.redirectLogin().then(function(result) {
      if (result.credential) {
        window.localStorage.setItem("displayName",result.user.displayName);
        window.localStorage.setItem("email",result.user.email);
        window.localStorage.setItem("picture",result.user.photoURL);
        //console.log(result)
      }
    }).catch(
      (err) => {
        this.error = err;
      })
  }


  login(loginType, formData?) {
    //this._backendService.login(loginType, formData)
    //.then(
      //(success) => {
        //if(formData) {
          //window.localStorage.setItem("email",formData.email);
        //}
        //console.log(success);
        //this._router.navigate(['/discover/events/go']);
      //}).catch(
      //(err) => {
      //  this.error = err;
      //})
   //;
  }

  logout() {
    this._backendService.logout()
     .then(
       (success) => {
       this._router.navigate(['/login']);
     }).catch(function (error) {
         console.log(error);
       })
  } 

}
