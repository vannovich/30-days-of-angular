import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockTime {
  private mockTime: Date = new Date();

  constructor(){
    this.mockTime.setHours(20, 5, 0)
  }

  getCurrentTime():Date{
    return this.mockTime;
  }
}
