import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngFor-TrackBy';
  students:Object[];
  constructor(){
    this.students = [{name:"nilesh",age:25,id:1},{name:"sushant",age:40,id:2},{name:"pari",age:25,id:3},{name:"pooja",age:26,id:4}]
  }

  getMoreData(){
    this.students = [{name:"nilesh",age:25,id:1},{name:"sushant",age:40,id:2},{name:"pari",age:25,id:3},{name:"pooja",age:26,id:4},{name:"pooja",age:26,id:4}]
  }

  trackByStudentId(index:number,students:any):String{
    return students.id;
  }
}
