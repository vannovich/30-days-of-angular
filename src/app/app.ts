import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PostList } from './components/post-list/post-list';
;

@Component({
  selector: 'app-root',
  imports: [PostList,FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
