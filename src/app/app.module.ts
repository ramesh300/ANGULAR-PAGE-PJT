import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageComponent } from './page/page.component';
import { Srinu12Component } from './srinu12/srinu12.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    PageComponent,
    Srinu12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
