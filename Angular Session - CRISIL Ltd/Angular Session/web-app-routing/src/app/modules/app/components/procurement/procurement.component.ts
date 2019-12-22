
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class ProcurementComponent implements OnInit {
  //Type Declarations
  CounterValue : number;
  //TimerCallback : () => void;
  TimerId : number;
 
  constructor(private _ChangeDetectorRef : ChangeDetectorRef) //Dependency Injection
  {
    this.CounterValue = 0;

    function TimerCallback()
    {
      this.CounterValue = this.CounterValue + 1;
      this._ChangeDetectorRef.detectChanges();
    }

    this.TimerId = setInterval(TimerCallback.bind(this),3000);
  }
  
  ngOnInit() {
  }

  ngOnDestroy()
  {
    clearInterval(this.TimerId);
  }

  handleIncrementClick()
  {
    this.CounterValue = this.CounterValue + 1;
  }

  getCounterIncrementValue()
  {
    //this.CounterValue = this.CounterValue + 1;
    return this.CounterValue++;
  }

}