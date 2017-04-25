import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { AircraftsComponent } from './my-app-components/aircrafts/aircrafts.component';
@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
