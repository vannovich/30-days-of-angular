import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Time {
  getCurrentTime(): Date{
    return new Date();
  }
}
