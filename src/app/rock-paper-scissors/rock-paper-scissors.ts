import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  imports: [CommonModule],
  templateUrl: './rock-paper-scissors.html',
  styleUrl: './rock-paper-scissors.css',
})
export class RockPaperScissors {
  choices = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  determinWinner(player: string, computer: string): string {
    if (player === computer) return "It's a tie";
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }

    return 'You lose!';
  }

  play(choice: string) {
    this.playerChoice = choice;
    this.computerChoice = this.choices[this.getRandomNumber(this.choices.length)];
    this.result = this.determinWinner(this.playerChoice, this.computerChoice)
  }
}
