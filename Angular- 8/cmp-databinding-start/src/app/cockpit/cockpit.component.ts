import { Component, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
    selector :'app-cockpit',
    templateUrl :'./cockpit.component.html',
    styleUrls :['./cockpit.component.css']
})
export class cockpit {
  @Output() serverCreated = new EventEmitter<{serverName:string,contant : string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string,contant : string}>();
  @ViewChild('serverContent',{static: false}) serverContentInput: ElementRef
    //newServerName = '';
    //newServerContent = '';
  onAddServer(serverNameInput : HTMLInputElement) {
    console.log(serverNameInput)
   this.serverCreated.emit({serverName:serverNameInput.value,contant:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput : HTMLInputElement) {
    console.log(serverNameInput)
    this.bluePrintCreated.emit({serverName:serverNameInput.value,contant:this.serverContentInput.nativeElement.value});
  }
}