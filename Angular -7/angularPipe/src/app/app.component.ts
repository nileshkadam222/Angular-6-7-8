import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularPipe';
  employee : Object[] = [
    {
      "empCode":"Emp01",
      "empName":"Nilesh",
      "joinDate":"25/Augest/2013",
      "salary":250000
  },  {
    "empCode":"Emp02",
    "empName":"Sushant",
    "joinDate":"09/Sept/2013",
    "salary":85000
},  {
  "empCode":"Emp03",
  "empName":"Paritoesh",
  "joinDate":"25/Augest/2013",
  "salary":250000
},  {
  "empCode":"Emp04",
  "empName":"Ankita",
  "joinDate":"25/Augest/2010",
  "salary":250000
},  {
  "empCode":"Emp05",
  "empName":"pooja",
  "joinDate":"25/july/2013",
  "salary":250000
}]

dob:Date = new Date();
salary:Number = 25000
name :String = "nilesh ashok kadam"
}
