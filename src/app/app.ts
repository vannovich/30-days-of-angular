import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Calculator } from './component/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {}
