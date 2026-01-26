import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterService } from '../services/currency-converter-service';

@Component({
  selector: 'app-currency-converter',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css',
})
export class CurrencyConverter {
  amount: number = 0;
  sourceCurrency: string = 'USD';
  targetCurrency: string = 'EUR';
  result: number = 0;
  conversionRate: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];
  currencyFlags: { [key: string]: string } = {
    USD: '🇺🇸',

    EUR: '🇪🇺',

    GBP: '🇬🇧',

    INR: '🇮🇳',

    JPY: '🇯🇵',
  };

  constructor(private currncyConverterService: CurrencyConverterService) {}

  updateConverter() {
    this.conversionRate = this.currncyConverterService.getConvertionRate(
      this.sourceCurrency,
      this.targetCurrency,
    );
    if (this.conversionRate === null) {
      this.result = 0;
      return;
    }
    this.result = this.currncyConverterService.convertCurrency(
      this.amount,
      this.sourceCurrency,
      this.targetCurrency,
    );
  }

  convertCurrency() {
    this.updateConverter();
  }

  getFlagAndCurrency(currency: string): string {
    return `${this.currencyFlags[currency] || ''} ${currency}`;
  }
}
