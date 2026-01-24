import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HoverHighlight } from './directives/hover-highlight';
import { TextTransform } from './directives/text-transform';
import { ClickOutsite } from './directives/click-outsite';
import { FocusOn } from './directives/focus-on';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HoverHighlight, TextTransform, ClickOutsite, FocusOn],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {}
