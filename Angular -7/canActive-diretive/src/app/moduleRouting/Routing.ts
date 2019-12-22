import {Routes} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {HomeComponent} from '../home/home.component';
import {ActivateGuard} from '../router-guard/activate.guard';

export const applicationRoute : Routes = [
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'Admin',component:AdminComponent,canActivate:[ActivateGuard]}
]

