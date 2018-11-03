import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css']
})
export class HeroMainComponent implements OnInit {

  submitted = false;
	mailChimpEndpoint = 'https://charcolrestaurant.us4.list-manage.com/subscribe/post-json?u=120fbe0788485e4ccfeefe3b5&amp;id=52e54ff279';
	error = '';


  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      instagram: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      termsAndConditions: [null, [Validators.required]], 
    });
  }

  // reactive form components
	emailControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	nameControl = new FormControl('', [
		Validators.required
	]);


  get firstName() {
    return this.form.get('firstname');
  }

  get lastName() {
    return this.form.get('lastname');
  }

  get instagram() {
    return this.form.get('instagram');
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
    let sent = this.sendToList(user)


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
    this.router.navigate(["/login/action"], navigationExtras);
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

  sendToList(user){
    
		const params = new HttpParams()
        .set('FNAME', user.value.firstName)
        .set('LNAME', user.value.lastName)
        .set('EMAIL', user.value.email)
        .set('MMERGE3', user.value.instagram)
				.set('b_120fbe0788485e4ccfeefe3b5_52e54ff279', ''); // hidden input name

			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
				if (response.result && response.result !== 'error') {
					this.submitted = true;
				}
				else {
					this.error = response.msg;
				}
			}, error => {
				console.error(error);
				this.error = 'Sorry, an error occurred.';
			});
		}
	
  

}
