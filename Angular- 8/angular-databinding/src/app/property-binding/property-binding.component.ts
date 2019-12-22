import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent  {
  addNewServer = false;
  serverName = ""
  serverCreatedStatus = "No Server Created";
  constructor(){
    setTimeout(()=>{
      this.addNewServer = true;
    },2000)
  }

  createNewServer(){
    this.serverCreatedStatus = "Server Created";
  }
  updateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
