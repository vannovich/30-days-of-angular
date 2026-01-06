import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule, CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
counter: number = 0;
increment(){
  this.counter++
}
decrement(){
  this.counter--;
}
getCounterStatus():string {
  if (this.counter > 0){
    return "Positive";
  }else if (this.counter === 0){
    return "Neutral";
  }else{
    return "Negative";
  }
}
}
