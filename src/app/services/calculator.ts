import { Injectable } from '@angular/core';
import { operate } from 'rxjs/internal/util/lift';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private currentOperand: string = '';
  private previousOperand: string = '';
  private opeartor: string | null = null;

  constructor() {}

  private isOperator(input: string): boolean {
    return ['+', '-', '*', '/'].includes(input);
  }

  private clearCalculator(): void {
    this.currentOperand = '';
    this.clearOperation();
  }
  private clearOperation(): void {
    this.previousOperand = '';
    this.opeartor = null;
  }

  getDisplay(): string {
    const previous = this.previousOperand || '';
    const opeartor = this.opeartor || '';
    const current = this.currentOperand || '';
    return previous + opeartor + current;
  }

  private handleNumber(num: string): void {
    this.currentOperand += num;
  }

  private calculator(): void {
    if (!this.previousOperand || !this.currentOperand || !this.opeartor) {
      return;
    }

    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    let result: number;

    switch (this.opeartor) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = curr === 0 ? NaN : prev / curr;
        break;
      default:
        return;
    }

    this.currentOperand = isNaN(result) ? 'Error' : result.toString();
    this.clearOperation();
  }
  private handleOperator(op: string): void{
    if(this.currentOperand === '' && this.previousOperand === '') return;
    if(this.previousOperand && this.currentOperand){
      this.calculator();
    }
    this.opeartor = op;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';


  }

  handleInput(input: string): void{
    if(this.isOperator(input)){
      this.handleOperator(input);
    }else if(input === 'C'){
      this.clearCalculator();
    }else if(input === "="){
      this.calculator();
    } else{
      this.handleNumber(input);
    }
  }
}
