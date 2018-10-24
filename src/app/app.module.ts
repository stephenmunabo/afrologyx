import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    OtherEventsCardsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent,  data : {showButton: true}},
      {path: 'faq/go', component: FaqPageComponent,  data : {showButton: true}},
      {path: 'perks/do', component: PerksComponent,  data : {showButton: true}},
      {path: 'login/action', component: LoginComponent,  data : {showButton: true}},
      {path: 'discover/events/go', component: DiscoverEventsComponent,  data : {showButton: true}},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
