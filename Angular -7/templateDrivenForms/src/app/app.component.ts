import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'templateDrivenForms';

  registerUser(regForm:any){
    debugger;
    console.dir(regForm)
  }
}
