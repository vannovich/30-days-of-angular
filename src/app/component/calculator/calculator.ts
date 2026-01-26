import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Display } from '../display/display';
import { CalculatorService } from '../../services/calculator';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, Display],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  operators: string[] = ['+', '-', '*', '/'];
  buttonLayout: string[][] = [
    ['1', '2', '3', '*'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['C', '0', '=', '/'],
  ];

  constructor(private calculatorService: CalculatorService) {}

  handleInput(input: string): void {
    this.calculatorService.handleInput(input);
  }

  get display(): string {
    return this.calculatorService.getDisplay();
  }
}
