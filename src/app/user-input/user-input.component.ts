import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInputData } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<UserInputData>();

  enterInitialInvesment = '0';
  enterAnnualInvestment = '0';
  enterExpectedInvestment = '10';
  enterDurationInvestment = '10';

  onSumbit() {
    this.calculate.emit({
      initialInvestment: +this.enterInitialInvesment,
      annualInvestment: +this.enterAnnualInvestment,
      expectedReturn: +this.enterExpectedInvestment,
      duration: +this.enterDurationInvestment,
    });
  }
}
