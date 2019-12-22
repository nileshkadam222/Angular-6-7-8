import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
    selector:'app-server',
    templateUrl :'./server.component.html',
    styleUrls : ["./server.comopnent.css"]

})
export class server{
    serverStatus = "offline";
    serverCreated = false;
    serverName = undefined;
    serverList = [{name:'test',status:'online'},{name:'test2',status:'offline'}]
    constructor(){
        this.serverStatus = Math.random() < 0.5 ? "Online" : "Offline";
    }
    addNewServer(){
        this.serverStatus = "online";
        this.serverCreated = true;
        this.serverStatus = Math.random() < 0.5 ? "Online" : "Offline";
        this.serverList.push({name:this.serverName,status:this.serverStatus});
    }
    getColor(){
        return this.serverStatus.toLowerCase() == 'online' ? "green" : "red";
    }
}