import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { successAlert } from './successAlert/successAlert.component';
import { warningAlert } from './warningAlert/warningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    successAlert,
    warningAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
