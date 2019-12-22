import { Component } from '@angular/core';
import {TestServiceService} from './../services/test-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[TestServiceService]
})
export class AppComponent {
  constructor(private myService:TestServiceService){}
  title = 'serviceExample';
  ngOnInit(){
    this.title = this.myService.display();
  }
}
