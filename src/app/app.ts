import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { JokeGenerator } from './joke-generator/joke-generator';
;

@Component({
  selector: 'app-root',
  imports: [JokeGenerator,FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
