import { InventryComponent } from '../inventry/inventry.component';

export  const EcommerceModulesRoute =
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
    component :InventryComponent
}
];