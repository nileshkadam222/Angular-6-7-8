import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'customePipe';
  employee : Object[] = [{"name":"nilesh","age":25,"gender":"male"},{"name":"ankita","age":25,"gender":"female"},{"name":"pooja","age":30,"gender":"female"}]
}
