import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "@angular/fire"
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { FIREBASE_CREDENTIALS } from "./FirebaseAuth"
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddShoppingPage} from "../pages/add-shopping/add-shopping"
import {EditShoppingItemPage} from "../pages/edit-shopping-item/edit-shopping-item"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddShoppingPage,
    EditShoppingItemPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
