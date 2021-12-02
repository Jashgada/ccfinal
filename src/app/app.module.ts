import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { ReetailQ1Component } from './reetail-q1/reetail-q1.component';
import { ReetailQ2Component } from './reetail-q2/reetail-q2.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    ReetailQ1Component,
    ReetailQ2Component,
    LoadDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
