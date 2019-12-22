import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngFor-grouping';
  student :any[] = [{country:"india",users:[{name:"nilesh"},{name:"sushant"},{name:"pari"}]},{country:"pak",users:[{name:"nilesh"},{name:"sushant"},{name:"pari"}]}]

}
