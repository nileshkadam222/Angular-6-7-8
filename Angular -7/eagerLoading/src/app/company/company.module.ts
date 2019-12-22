import {NgModule} from '@angular/core';
import { compannyRouting } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';


@NgModule({
    declarations :[CompanyComponent,CompanyListComponent],
    imports :[compannyRouting],
    providers:[],
    bootstrap:[]
})

export class companyModule{
    constructor(){
        console.log("company module loaded");
    }



}