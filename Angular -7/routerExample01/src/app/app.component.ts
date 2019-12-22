import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router :Router){}
  title = 'routerExample01';
  goForRoute(urlType){
    if(urlType == "student"){
      this.router.navigate(['/student']);
    }else if(urlType == "studentDetails"){
      this.router.navigate(['/studentDetails']);
    }
  }
}
