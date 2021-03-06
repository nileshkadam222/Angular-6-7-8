import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ActivateGuard } from './router-guard/activate.guard';
import { UserService } from './services/user.service';
import {applicationRoute} from './moduleRouting/Routing';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoute)
  ],
  providers: [ActivateGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
