import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-inventry',
  templateUrl: './inventry.component.html',
  styleUrls: ['./inventry.component.scss']
})
export class InventryComponent implements OnInit {

  productList : Product[];
  constructor() { 
    this.productList = [
      new Product("Mobile","apple",2000),
      new Product("Laptop","apple",2000),
      new Product("Fulkrum","apple",2000)
    ]
  }


  ngOnInit() {

  }


  addProductToList(newProduct : Product){
    this.productList.push(newProduct);
  }
}

