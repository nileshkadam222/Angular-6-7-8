import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Output() onProductSave :EventEmitter<Product>   //custome event genreator
  newProduct :Product;
  constructor() {
    this.onProductSave = new EventEmitter<Product>();
    this.newProduct = new Product();
   }

  ngOnInit() {
   
  }

  handleSaveProduct(){
    this.onProductSave.emit(this.newProduct);  //raise an event with new product as payload . event data
    console.dir(this.newProduct)
  }
}
