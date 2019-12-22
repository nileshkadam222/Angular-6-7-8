import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { InventryComponent } from '../ecommerce/inventry/inventry.component';
import { ListComponent } from '../ecommerce/list/list.component';
import { EntryComponent } from '../ecommerce/entry/entry.component';
import { HomePageComponent } from '../app/components/home-page/home-page.component';
import { CommonModule } from '@angular/common';  // Directive  



//ng-module is decorateor
@NgModule({
  declarations: [
    //add your components
    InventryComponent,
    ListComponent,
    EntryComponent,
  ],
  imports: [
    //add modules
    CommonModule,
    FormsModule
    ],
    exports :[
      InventryComponent
    ],
    
  providers: [
    //services can be added hear
  ],
  //bootstrap: [ecommerce]   //bootsrtap the root comp[onet of application]
})

//export module because another modeule can import it
export class ecommerce { }
