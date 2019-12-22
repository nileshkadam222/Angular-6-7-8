import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() products : Product[]
  constructor() { 
    this.products = []
  }

  ngOnInit() {
  }

}
