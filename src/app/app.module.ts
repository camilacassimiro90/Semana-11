import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
