import {Routes,RouterModule, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';

const router : Routes = [
    {
        path:'companyList',
        component:CompanyListComponent
    },
    {
        path:'company',
        component:CompanyComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports :[RouterModule]
})

export class compannyRouting{
    constructor(){
    }
}