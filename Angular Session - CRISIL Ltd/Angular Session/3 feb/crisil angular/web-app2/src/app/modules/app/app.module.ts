import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppComponent } from './components/app/app.component';
import { InventryComponent } from '../ecommerce/inventry/inventry.component';
import { ListComponent } from '../ecommerce/list/list.component';
import { EntryComponent } from '../ecommerce/entry/entry.component';
import { ecommerce } from '../ecommerce/ecommerce.module';
import { ProcurmentComponent } from './components/procurment/procurment.component';
//import { ProcurmentComponent } from './procurment/procurment.component';
import {RouterModule} from '@angular/router'
import {AppRoutes} from "D:/crisil angular/web-app/src/app/modules/app/routes/app.route"




//ng-module is decorateor
@NgModule({
  declarations: [
    //add your components
    AppComponent,
   // InventryComponent,
    //ListComponent,
    //EntryComponent,
    HomePageComponent,
   ProcurmentComponent
  ],
  imports: [
    //add modules
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    ecommerce,
    ],
  providers: [
    //services can be added hear

  ],
  bootstrap: [AppComponent]   //bootsrtap the root comp[onet of application]
})

//export module because another modeule can import it
export class AppModule { }
