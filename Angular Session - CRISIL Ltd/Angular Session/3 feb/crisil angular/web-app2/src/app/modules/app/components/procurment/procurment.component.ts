import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-procurment',
  templateUrl: './procurment.component.html',
  styleUrls: ['./procurment.component.scss'],
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProcurmentComponent implements OnInit {
  counterValue : number;
  constructor(private changeDetectorRef : ChangeDetectorRef) {    //dependency injection
    this.counterValue = 0;

    // setInterval(function(){
    //   debugger;    
    //   this.counterValue  = this.counterValue +1;
    //   this.changeDetectorRef.detectChanges()
    // }.bind(this),200)
   }

  ngOnInit() {
  }

  handleIncrementClick(){
    this.counterValue  = this.counterValue +1;
  }

  getCounterValue(){
    return  this.counterValue +1;
  }
}
