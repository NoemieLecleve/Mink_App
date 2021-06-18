import { Component } from '@angular/core';
import { AuthService } from './../../services/authService';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public authService : AuthService) {}

}
