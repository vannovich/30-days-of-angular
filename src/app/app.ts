import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FaqAccordion } from './faq-accordion/faq-accordion';
;

@Component({
  selector: 'app-root',
  imports: [ FaqAccordion,FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
