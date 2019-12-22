import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Type Declaration
  AppName : string;
  AppVersion : number;
  AppDescription : string;
  IsActive: Boolean;
  DataPoints : Array<string>;


  constructor()
  { 
    this.AppName = "EInventory";
    this.AppVersion = 1.5;
    this.AppDescription = "";
    this.IsActive = true;
    //this.DataPoints = ["Angular", "React", "NodeJS"];
    this.DataPoints = [];
  }

  ngOnInit() {
  }

  //Automatically understood as function
  handleRefresh(event)
  {
    console.log("Refresh Called");
    console.dir(event);
  }

  handleDescriptionChange(event)
  {
    console.log(event.target.value);
    this.AppDescription = event.target.value;
  }


}
