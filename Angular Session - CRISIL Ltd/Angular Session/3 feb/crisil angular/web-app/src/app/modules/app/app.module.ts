import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EcommerceModule } from '../../modules/ecommerce/ecommerce.module';
import { RouterModule } from '@angular/router'

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProcurementComponent } from './components/procurement/procurement.component';
import { AppRoutes } from './routes/app.route';


// decorators = NgModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcurementComponent
  ],
  imports: [
    BrowserModule,  //In build module
    FormsModule,     //we qualify to use ngModel.
    RouterModule.forRoot(AppRoutes), //New RouterService(AppRoutes)
    //EcommerceModule //Custom Module
  ],
  providers: [],
  bootstrap: [AppComponent]  //AppComponent is root component
})
export class AppModule { }
