import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //type declaration

  appName : string;
  appVersion :number;
  appDescription : string
  isActive : boolean
  dataPoints : String[]
  constructor() { 
    this.appName = "Fulkrum";
    this.appVersion = 2.5;
    this.appDescription = ""
    this.isActive = false
    this.dataPoints = ["Angular","css","Html","Js"]
  }

  ngOnInit() {
  }

  handleRefresh(event){
    debugger;
    console.log("Refresh called");
    console.dir(event)
  }

  handleDescriptionChange(event){
      console.log(event.target.value);
      this.appDescription = event.target.value;
  }

  //using ngModule

}
