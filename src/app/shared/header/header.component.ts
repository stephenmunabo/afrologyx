import { Component, OnInit } from '@angular/core';
import { BackEndService} from '../../main/services/back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _backendService: BackEndService, private _router: Router) { }

  ngOnInit() {
  }
  logouts(){
    alert('test');
  }

  logout() {

    this._backendService.logout()
     .then(
       (success) => {
       this._router.navigate(['/login/action']);
       console.log('errorhhh');
     }).catch(function (error) {
         console.log(error);
       })
  } 

}
