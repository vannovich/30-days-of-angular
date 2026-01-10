import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RockPaperScissors } from './rock-paper-scissors/rock-paper-scissors';
;

@Component({
  selector: 'app-root',
  imports: [RockPaperScissors, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
