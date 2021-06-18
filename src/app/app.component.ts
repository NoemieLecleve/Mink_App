import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import firebase from "firebase/app"

// import { TabsPage } from '../tabs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
}) 
      export class AppComponent {
        constructor(
          private platform: Platform,
      //  private splashScreen: SplashScreen,
      //  private statusBar: StatusBar,
          private router: Router,
          public afAuth: AngularFireAuth
        ) {
          this.initializeApp();
        }
      
        initializeApp() {
          this.platform.ready().then(() => {
            this.afAuth.user.subscribe(user => {
              if(user){
                this.router.navigate(["tabs/home"]);
              } else {
                this.router.navigate(["/login"]);
              }
            }, err => {
              this.router.navigate(["/login"]);
            });
          }
       )}
      }
    
  

