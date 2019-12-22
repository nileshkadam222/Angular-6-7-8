
import { Component,Input } from "@angular/core";

@Component({
    selector :'app-serverElement',
    templateUrl :'./server-element.component.html',
    styleUrls :['./server-element.component.css']
})
export class serverElement {
   @Input("serverElm") element :{type:String,content:String,name:String};
}