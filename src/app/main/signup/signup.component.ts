import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phonenumber: [null, [
        Validators.required, 
        Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      termsAndConditions: [null, [Validators.required]], 
    });
  }

  get firstName() {
    return this.form.get('firstname');
  }

  get email() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phonenumber');
  }

  get termsAndConditions(){
    return this.form.get('termsAndConditions');
  }

  onSubmit = function (user) {
    //save to local storage
    let saved = this.sendToStorage(user);


    if(saved){
      //console.log(user.value.firstname);
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "firstname": user.value.firstname,
            "email": user.value.email,
            "phone": user.value.phonenumber,
            "termsAndConditions": user.value.termsAndConditions
        }
    };
    //this.router.navigate(["/verification/method"], navigationExtras);
    this.router.navigate(["/mobile/consent"], navigationExtras);
    }else {
      alert('unable to save');
    }

    //this.router.navigateByUrl('/verification/method')
    console.log('the event obj',user.value.firstname);
  }

  sendToStorage(user){
    localStorage.setItem('userData', JSON.stringify(user.value));
    let retrivedStoredData = JSON.parse(localStorage.getItem('userData'));

    let getObject = retrivedStoredData === null ? [] : retrivedStoredData;

    if(getObject !== []){
      return true;
    }else{
      return false;
    }   
  }

}
