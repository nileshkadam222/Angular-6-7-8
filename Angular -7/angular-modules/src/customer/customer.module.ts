import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  declarations: [EmployeeLoginComponent,EmployeeLoginComponent],
  imports: [
    CommonModule
  ],
  bootstrap :[EmployeeLoginComponent]
})
export class CustomerModule { }
