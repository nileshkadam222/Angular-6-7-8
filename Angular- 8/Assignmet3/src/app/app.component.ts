import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignmet3';
  showUserDetails = true;
  logData = [];
  showHideUserDetails(){
    this.showUserDetails = !this.showUserDetails;
    if(this.showUserDetails){
      this.logData.push("P tag is visiable " + new Date())
    }else{
      this.logData.push("P tag is not visiable " + new Date())
    }
    
  }
}
