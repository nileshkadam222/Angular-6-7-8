import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Nilesh","Kadam","nil@gmail.com",2000),
    new SalesPerson("Harshu","kadam","har@mail.com",4000),
    new SalesPerson("Ranjana","kadam","rajn@gmail.com",500),
    new SalesPerson("Ashok","Kadam","test@gmail.com",45555)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
