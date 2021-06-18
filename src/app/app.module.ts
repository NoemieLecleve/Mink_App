import { AuthService } from './../services/authService';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebase), 
  BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule,
  AngularFireDatabaseModule, AngularFirestoreModule],
  providers: [
     AuthService,
     AngularFirestoreModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }],
  bootstrap: [AppComponent],
})
export class AppModule {}