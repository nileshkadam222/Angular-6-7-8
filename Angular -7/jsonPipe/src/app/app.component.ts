import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jsonPipe';
  employee : Object[] = [{"name":"nilesh","age":25},{"name":"ankita","age":25},{"name":"pooja","age":30}]
}
