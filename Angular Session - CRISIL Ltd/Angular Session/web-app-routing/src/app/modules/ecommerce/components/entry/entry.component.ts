import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../models/product';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  //@Output Registered as event
  //@Output() OnProductSave : EventEmitter<Product>;
  NewProduct : Product;

  constructor(
    private _DataService: DataService,
    private _RouterService : Router
  ) 
  { 
    //this.OnProductSave = new EventEmitter<Product>(); //Custom Event Generator
    this.NewProduct = new Product();
  }

  ngOnInit() {
  }

  HandleSaveProduct(goBackToList: boolean)
  {
    console.dir(this.NewProduct);
    //Passing the this.NewProduct as reference so on UI if you delete the text then list also gets affected.
    //Two ways to solve problem.
    // 1. after emit assign new object i.e this.NewProduct = new Product();
    // 2. clone object and then pass
    //this.OnProductSave.emit(this.NewProduct); //Raise an event with NewProduct as Payload / Event data
    //this.NewProduct = new Product();

    var self = this;
    self._DataService.addProduct(self.NewProduct)
        .then(
          function success()
          {
            if(goBackToList)
            {
              // Redirect to List Route
              self._RouterService.navigate(
                [
                  "ecommerce",
                  "list"  // ecommerce/list
                ]
              );
            }
            console.dir(arguments);
            self.NewProduct = new Product(); //CLEAN UP: Ready for the next entry
          },
          function error(errorMessage)
          {
            alert(errorMessage);
          }
        )
  }
}
