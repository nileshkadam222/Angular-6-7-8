import { Injectable } from '@angular/core';
import { book } from './book';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
const books : book[] = [
  {id:1,name:"angular",auther:"nil",state:"abc"},
  {id:2,name:"ASp",auther:"ooa",state:"abc"},
  {id:3,name:"C sharp",auther:"aaa",state:"abc"},
  {id:4,name:"ava",auther:"aa",state:"abc"}
];

export class BookserviceService {

  constructor() { }
}
