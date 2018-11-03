import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AngularFireModule } from  'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { environment } from '.././environments/environment';



import { BackEndService } from './main/services/back-end.service';
import { AuthGuardService } from './main/services/auth-guard.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroMainComponent } from './shared/hero-main/hero-main.component';
import { HeroCardsComponent } from './shared/hero-main/hero-cards/hero-cards.component';
import { FlyerCardsComponent } from './shared/flyer-cards/flyer-cards.component';
import { StickyofferComponent } from './shared/stickyoffer/stickyoffer.component';
import { SubscribeComponent } from './shared/subscribe/subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PhilosophyComponent } from './shared/philosophy/philosophy.component';
import { AfrologiansComponent } from './shared/afrologians/afrologians.component';
import { WhattoexpectComponent } from './shared/whattoexpect/whattoexpect.component';
import { FaqsComponent } from './shared/faqs/faqs.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { DarkHeaderComponent } from './shared/dark-header/dark-header.component';
import { PerksComponent } from './main/perks/perks.component';
import { PerksBoardComponent } from './shared/perks-board/perks-board.component';
import { LoginComponent } from './main/login/login.component';
import { DiscoverEventsComponent } from './main/discover-events/discover-events.component';
import { MonthlyCardComponent } from './shared/monthly-card/monthly-card.component';
import { OtherEventsCardsComponent } from './shared/other-events-cards/other-events-cards.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './main/signup/signup.component';
import { AltHomeComponent } from './main/alt-home/alt-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroMainComponent,
    HeroCardsComponent,
    FlyerCardsComponent,
    StickyofferComponent,
    SubscribeComponent,
    FooterComponent,
    PhilosophyComponent,
    AfrologiansComponent,
    WhattoexpectComponent,
    FaqsComponent,
    FaqPageComponent,
    DarkHeaderComponent,
    PerksComponent,
    PerksBoardComponent,
    LoginComponent,
    DiscoverEventsComponent,
    MonthlyCardComponent,
    OtherEventsCardsComponent,
    RegisterComponent,
    SignupComponent,
    AltHomeComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'atrackin'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, data : {showButton: true}},
      {path: 'alt/home', component: AltHomeComponent,  data : {showButton: true}},
      {path: 'faq/go', component: FaqPageComponent,  data : {showButton: true}},
      {path: 'perks/do', component: PerksComponent,  data : {showButton: true}},
      {path: 'login/action', component: LoginComponent,  data : {showButton: true}},
      {path: 'discover/events/go', component: DiscoverEventsComponent, canActivate: [AuthGuardService],  data : {showButton: true}},
      {path: 'signup/do', component: SignupComponent,  data : {showButton: true}},
    ])
  ],
  providers: [BackEndService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
