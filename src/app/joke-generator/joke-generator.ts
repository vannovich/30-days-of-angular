import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Joke } from '../services/joke';

@Component({
  selector: 'app-joke-generator',
  imports: [CommonModule],
  templateUrl: './joke-generator.html',
  styleUrl: './joke-generator.css',
})
export class JokeGenerator {
  jokeSetup: string = '';
  jokePunchline: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jokeService: Joke) {}

  fetchJoke() {
    this.isLoading = true;
    this.errorMessage = '';

    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to fetch a joke. Please try again';
        this.jokeSetup = '';
        this.jokePunchline = '';
        this.isLoading = false;
      },
    });
  }
}
