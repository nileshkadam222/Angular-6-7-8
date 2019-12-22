import { HomeComponent } from '../components/home/home.component';
import { ProcurementComponent } from '../components/procurement/procurement.component';
import { InventoryComponent } from '../../ecommerce/components/inventory/inventory.component';


export const AppRoutes =
[
    //URLs
    /*
        Top Level Routing / Free Routes
            http://localhost/
            http://localhost/home
            http://localhost/procurement
            http://localhost/inventory

        Second Level Routing
            http://localhost/inventory/entry
            http://localhost/inventory/list

    */
   {
        path : "",
        pathMatch : "full",  //exact match only
        component : HomeComponent   // new HomeComponent()
   },
   {
        path : "home",
        component : HomeComponent   // new HomeComponent()
   },
   {
        path : "procurement",
        component : ProcurementComponent   // new ProcurementComponent()
   },
   // Lazy Loading of Ecommerce Module
   {
        path : "ecommerce",
        //component : InventoryComponent   // new InventoryComponent()
        loadChildren : "../ecommerce/ecommerce.module#EcommerceModule" 
        //URL for JS file for EcommerceModule
   }
];