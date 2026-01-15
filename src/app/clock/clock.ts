import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CLOCK_CONSTANTS as cc } from './clock.constants';
import { Time } from '../services/time';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.html',
  styleUrls: ['./clock.css'],
})
export class Clock implements OnInit, OnDestroy {
  hours = 0;
  minutes = 0;
  seconds = 0;

  clockNumbers = this.generateClockNumbers();
  private timerId: any;

  constructor(
    private timeService: Time,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateClock();
      this.timerId = setInterval(() => this.updateClock(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  generateClockNumbers() {
    const numbers = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    for (let n = 1; n <= 12; n++) {
      const angle = (n - 3) * cc.DEGREES_PER_HOUR * cc.DEG_TO_RAD;
      const top = centerOffset + radius * Math.sin(angle);
      const left = centerOffset + radius * Math.cos(angle);

      numbers.push({
        number: n,
        position: {
          top: `${top}%`,
          left: `${left}%`,
        },
      });
    }

    return numbers;
  }

  updateClock() {
    const now = this.timeService.getCurrentTime();

    this.seconds =
      now.getSeconds() * cc.DEGREES_PER_MINUTE_SECOND + cc.OFFSET_ROTATION;

    this.minutes =
      now.getMinutes() * cc.DEGREES_PER_MINUTE_SECOND +
      now.getSeconds() * (cc.DEGREES_PER_MINUTE_SECOND / 60) +
      cc.OFFSET_ROTATION;

    this.hours =
      (now.getHours() % 12) * cc.DEGREES_PER_HOUR +
      now.getMinutes() * (cc.DEGREES_PER_HOUR / 60) +
      cc.OFFSET_ROTATION;
  }
}
