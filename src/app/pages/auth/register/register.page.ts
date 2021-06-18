import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/authService';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  /*
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Redirecting to the login page
      this.router.navigateByUrl('login.page');
      console.log("Successfull registration" + res)
    }).catch((error) => {
      window.alert(error.message)
    })
}
*/

}
