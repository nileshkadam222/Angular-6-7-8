import { HomePageComponent } from "../components/home-page/home-page.component";
import { ProcurmentComponent } from '../components/procurment/procurment.component';
import { InventryComponent } from '../../ecommerce/inventry/inventry.component';
import { EcommerceModulesRoute } from '../../ecommerce/ecommerceRoute/ecommerce.route';

export  const AppRoutes =
[
        // http://localhost/
        // http://localhost/home/
        // http://localhost/procurement/
        // http://localhost/inventory/

        // http://localhost/inventory/entry
        // http://localhost/inventory/list
{
    path :"",
    pathMatch :"full",
    component :HomePageComponent
},
{
    path :"home",
    component :HomePageComponent
},
{
    path :"procurement",
    component : ProcurmentComponent
},
//lazy load
// {
//     path :"ecommerence",
//     //component : InventryComponent
//    // loadChildren : "../ecommerce/ecommerce.module#EcommerceModulesRoute"
// }
];