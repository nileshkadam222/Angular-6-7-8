import { InventoryComponent } from '../../ecommerce/components/inventory/inventory.component';
import { ListComponent } from '../components/list/list.component';
import { EntryComponent } from '../components/entry/entry.component';


export const EcommerceRoutes =
[
    //URLs
    /*
        Top Level Routing / Free Routes
            http://localhost/ecommerce
    */
   {
        path : "",
       // pathMatch : "full",  //exact match only
        component : InventoryComponent,   // new InventoryComponent()
        /*
        Second Level Routing
            http://localhost/ecommerce/entry
            http://localhost/ecommerce/list

        */
        children : 
        [
            //http://localhost/ecommerce
            {
                path : "",
                pathMatch : "full",
                component : ListComponent
            },
            //http://localhost/ecommerce/list
            {
                path : "list",
                component : ListComponent
            },
            //http://localhost/ecommerce/entry
            {
                path : "entry",
                component : EntryComponent
            },
             {
                path : "entry/:id",
                component : EntryComponent
            }
        ]   //Second Level of Routing
   }
];