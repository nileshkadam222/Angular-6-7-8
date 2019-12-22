import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { InventoryComponent } from '../ecommerce/components/inventory/inventory.component';
import { ListComponent } from '../ecommerce/components/list/list.component';
import { EntryComponent } from '../ecommerce/components/entry/entry.component';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { EcommerceRoutes } from './routes/ecommerce.routes';


// decorators = NgModule
@NgModule({
  declarations: [
    InventoryComponent,
    ListComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,  //In build module
    FormsModule,     //we qualify to use ngModel.
    HttpClientModule, // new HttpClient()
    RouterModule.forChild(EcommerceRoutes), //New RouterService(AppRoutes)
  ],
  exports: [
    InventoryComponent
  ],
  providers: [
    DataService  //new instance of DataService() which is singleton across module
  ]
})
export class EcommerceModule { }
