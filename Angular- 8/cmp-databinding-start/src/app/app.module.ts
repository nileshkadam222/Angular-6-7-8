import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { serverElement } from './server-element/server-element.component';
import { cockpit } from './cockpit/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    cockpit,
    serverElement
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
