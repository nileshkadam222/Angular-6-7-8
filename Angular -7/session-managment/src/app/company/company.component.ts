import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("name","crisil");
    sessionStorage.setItem("name","nilesh");
    console.log(localStorage.getItem("name"))
    console.log(sessionStorage.getItem("name"))
  }

}
