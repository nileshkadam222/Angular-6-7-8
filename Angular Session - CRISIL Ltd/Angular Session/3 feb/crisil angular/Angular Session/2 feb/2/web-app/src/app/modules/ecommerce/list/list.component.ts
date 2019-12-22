import { Component, OnInit,Input, ChangeDetectionStrategy, SimpleChange, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Product } from '../../../models/product';
//import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

//changeDetectorRef: ChangeDetectorRef;
  @Input() products : Product[]
  productCopy : Product[]
  HoverStyle : {backgroundColor : string}
//elementRef : ElementRef
  constructor( private  _ElementRef : ElementRef ,private changeDetectRef :ChangeDetectorRef) { 
   
    this.products = []
    this.HoverStyle = {backgroundColor : ""};

    
  }

  ngOnInit() {
    console.log("ngOnInit of ListComponent");
    localStorage.setItem("ListComponentTimeStamp",new Date().toLocaleDateString())
  }

  ngOnChanges(change : SimpleChange){
    debugger

    console.dir(change);
    var products = change["products"]
    if(products){
      this.productCopy = [
        ...products.currentValue
      ]
    }
  }
  ngOnDestory(){
    console.log("ngOnDestory of ListComponent");
    localStorage.removeItem("ListComponentTimeStamp")
  }
  ngDoCheck(){
    debugger
    //custom logic dirty checking
    console.log("ngDoCheck of ListComponent");
    if(this.productCopy,length < this.products.length){
      this.productCopy = [
        ...this.products
      ];
      //this.changeDetectorRef.detectChanges();
    }
  }
  ngAfterViewInit() 
{
    debugger
    var domElement = this._ElementRef.nativeElement;
    domElement.addEventListener("mouseover",this.onHover.bind(this))
    domElement.addEventListener("mouseleave",this.onUnHover.bind(this))
  }

onHover()
{
  debugger;
  console.log("Hovered");
  this.HoverStyle.backgroundColor = "yellow";
  this.changeDetectRef.detectChanges();
}

onUnHover()
{
  console.log("UnHovered");
  this.HoverStyle.backgroundColor = ""
  this.changeDetectRef.detectChanges();
}

}




