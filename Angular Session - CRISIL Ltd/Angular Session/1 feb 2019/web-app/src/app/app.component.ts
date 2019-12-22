import { Component } from '@angular/core';


//decorator  -> for the declare compomet 
@Component({
  selector: 'app-root',  //we can use this selector in html for rendering in the html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app1';
}
