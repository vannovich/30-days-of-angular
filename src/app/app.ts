import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TicTacToe } from './tic-tac-toe/tic-tac-toe';
;

@Component({
  selector: 'app-root',
  imports: [TicTacToe, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
