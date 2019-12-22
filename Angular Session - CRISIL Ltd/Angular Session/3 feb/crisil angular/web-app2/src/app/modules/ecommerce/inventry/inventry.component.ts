import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { DataService } from '../services/dataService';
//import { Product } from '../../models/product';

@Component({
  selector: 'app-inventry',
  templateUrl: './inventry.component.html',
  styleUrls: ['./inventry.component.scss']
})
export class InventryComponent implements OnInit {

  productList : Product[];
  constructor(private _DataService : DataService) { 
     this.productList = [ ]
  }


  ngOnInit() {
     var  self = this
    var dataPromise = this._DataService.getProducts();
    dataPromise.then(
      function(product : Product){
        self.productList = product;
      },
      function(error){
        alert(error)
      })
  }


  //dirty checking and Immutables -- memory location update
  addProductToList(newProduct : Product){
    debugger
    this._DataService.addProduct(newProduct)
  //this.productList.push(newProduct);

    //  this.productList = [
    //    ...this.productList,newProduct
    //   ];
  }
}

