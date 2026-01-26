import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CurrencyConverter } from './currency-converter/currency-converter';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CurrencyConverter],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {}
