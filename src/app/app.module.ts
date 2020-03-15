import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import 'firebase/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    /** Material Angular Modules */
    MatButtonModule,
    MatProgressBarModule,

    /** Angulr Firebase Modules */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'angular-firebase-blog-c0906.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
