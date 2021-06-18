import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './../../../../services/authService';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logInForm: FormGroup;
  submitError: string;

  /* validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };  */

  constructor( public authService : AuthService, public angularFire: AngularFireAuth, public router: Router, 
    private ngZone: NgZone, private navParams: NavParams ) {
      
      this.logInForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        'password': new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ]))
      });
 
     }

  ngOnInit() {
  // this.mode = this.navParams.get('mode');
  }
/*
  signIn(email, password){
    this.authService.LoginUser(email.value, password.value)      
      .then((res) => {
        // if log in is successfull, it redirect to
        this.router.navigateByUrl('home');
        console.log("Succès" + res)
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  */

}
