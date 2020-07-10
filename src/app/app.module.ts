import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { BmiComponent } from './bmi/bmi.component';

var routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'index',pathMatch:'full'}, //routing to pages
  {path:'index',component:IndexComponent},
  {path : 'bmi', component: BmiComponent}
]

var firebaseConfig = {
apiKey: "AIzaSyCOwwF1pJ2-dpaQt_M5K76nMM3mZdwXroE",
authDomain: "bmindex-8a44a.firebaseapp.com",
databaseURL: "https://bmindex-8a44a.firebaseio.com",
projectId: "bmindex-8a44a",
storageBucket: "bmindex-8a44a.appspot.com",
messagingSenderId: "846352932329",
appId: "1:846352932329:web:43fac1680cd8b8f8e9bf78",
measurementId: "G-R3N7QQJX55"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
