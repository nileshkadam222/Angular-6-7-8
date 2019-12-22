import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InventryComponent } from './components/inventry/inventry.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { HomePageComponent } from './components/home-page/home-page.component';



//ng-module is decorateor
@NgModule({
  declarations: [
    //add your components
    AppComponent,
    HomeComponent,
    InventryComponent,
    ListComponent,
    EntryComponent,
    HomePageComponent
  ],
  imports: [
    //add modules
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [
    //services can be added hear

  ],
  bootstrap: [AppComponent]   //bootsrtap the root comp[onet of application]
})

//export module because another modeule can import it
export class AppModule { }
