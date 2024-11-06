import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>counter</h2>
  <h3> Counter: {{counter}} </h3>
<button (click)="increaseBy(2)" >+1</button>
<button (click)="decreaseBy()">-1</button>
<button (click)="reset()">reset</button>
  `,
  
})

export class CounterComponent  {
  public counter:number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }
  decreaseBy():void {
    this.counter -=1;
  }
  reset():void{
    this.counter = 10;
  }
}