import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',content:'testing',name:'trst'}];
  


  onServerAdded(serverData : {serverName:string,contant : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.contant
    });
  }

  onBlueprintAdded(blueprintData : {serverName : string,contant : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.contant
    });
  }
  

}
