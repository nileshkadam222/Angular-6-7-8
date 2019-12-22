import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../models/product';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  ProductList : Product[];
  ShowProducts : boolean;

  constructor(private _DataService: DataService) { 
    this.ProductList = [];
    this.ShowProducts = false;
  }

  AddProductToList(newProduct : Product)
  {
    //this.ProductList.push(newProduct);

    //It detects the memory location has been changed so it bypasses OnPush and updates templates
    //Immutable Vs Dirty Checking
    // this.ProductList = 
    // [
    //   ...this.ProductList, //SPEAD OPERATOR (Existing Products)
    //   newProduct
    // ]
    
    //this.ProductList = this._DataService.addProduct(newProduct);
    
    var self = this;
    this._DataService.addProduct(newProduct)
        .then(
          function success(productList : Product[])
          {
            self.ProductList = productList;
          },
          function error(errorMessage)
          {
            alert(errorMessage);
          }
        );
  }

  ngOnInit() 
  {
    //this.ProductList = this._DataService.getProducts();
    var self = this;
    var dataServicePromise = this._DataService.getProducts();
    
    dataServicePromise.then(
      function success(productList : Product[])
      {
        self.ProductList = productList;
      },
      function error(errorMessage)
      {
        alert(errorMessage);
      }
    );
  }

}
