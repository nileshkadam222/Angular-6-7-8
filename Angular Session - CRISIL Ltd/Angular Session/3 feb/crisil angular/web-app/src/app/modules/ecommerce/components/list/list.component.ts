import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChange, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Product } from '../../../../models/product';
import { DataService } from '../../services/data.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  //@Input() Products : Product[];
  Products : Product[];
  //ProductsCopy : Product[];
  HoverStyle : { background: string}; //on the fly custom object

  constructor(
    private _ChangeDetectorRef : ChangeDetectorRef,
    private _ElementRef : ElementRef,  //Ref of ListComponentInstance in Component
    private _DataService : DataService,
    private _RouterService : Router
  ) 
  { 
    this.Products = [];   //READ ONLY
    //this.ProductsCopy = []; //READ WRITE
    this.HoverStyle = { background : "" };
  }

  ngOnInit() 
  {
    var self = this;
    //console.log("ngOnInit of ListComponent");
    //window.localStorage.setItem("ListComponentTimeStamp", new Date().toLocaleTimeString());
    
    self._DataService.getProducts()
        .then(
          function success(productList : Product[])
          {
            self.Products = productList;
            self._ChangeDetectorRef.detectChanges();
          },
          function error(errorMessage)
          {
            alert(errorMessage);
          }
        );
  }

  /*
  //Once
  ngOnChanges(changes: SimpleChange)
  {
    console.log("Executing ngOnChanges");
    console.dir(changes);
    var changedProducts = changes["Products"];
    if(changedProducts) //At runtime Products will be provided
    {
      //COPYING products from products to Products Copy
      this.ProductsCopy = 
      [
        ...changedProducts.currentValue // updated data
      ]

    }
  }
  */

  //Update
  //ngDoCheck()
  //{
    //console.log("Executing ngDoCheck");
    // Custom Logic for Dirty Checking Products (Input Parameter)
    /*
    if(this.ProductsCopy.length < this.Products.length)
    {
      this.ProductsCopy = 
      [
        ...this.Products // updated data
      ]
      this._ChangeDetectorRef.detectChanges()
    }
    */
  //}

  /*
  ngOnDestroy()
  {
    console.log("ngOnDestroy of ListComponent");
    window.localStorage.removeItem("ListComponentTimeStamp");
    var domElement = this._ElementRef.nativeElement;
    domElement.removeEventListener("mouseover", this.onHover.bind(this));
    domElement.removeEventListener("mouseout", this.onUnHover.bind(this));
  }
  */


  ngAfterViewInit()
  {
    //DOM Element for your Component
    
    var domElement = this._ElementRef.nativeElement;
    domElement.addEventListener("mouseover", this.onHover.bind(this));
    domElement.addEventListener("mouseout", this.onUnHover.bind(this));
  }

  onHover()
  {
    //var domElement = this._ElementRef.nativeElement;
    //domElement.style.color = "red";
    //console.log("Hover");
    this.HoverStyle.background = "yellow";
    //this._ChangeDetectorRef.detectChanges();
  }

  onUnHover()
  {
    //console.log("UnHover");
    //var domElement = this._ElementRef.nativeElement;
    //domElement.style.color = "";
    this.HoverStyle.background = "";
    //this._ChangeDetectorRef.detectChanges();
  }

  handleModifyEvenet(productModify : Product){
    var productId = productModify.id;
    console.log(productId);
    this._RouterService.navigate(
      [
        "ecommerce",
        "entry",
        productId
      ]
    )

  }

}
