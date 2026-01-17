import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.css',
})
export class FeedbackForm {
  feedback = {
    name: '',
    email: '',
    feedback: '',
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.invalid) return;

    console.log('Form Submitted', this.feedback);
    this.submitted = true;
  }
}
