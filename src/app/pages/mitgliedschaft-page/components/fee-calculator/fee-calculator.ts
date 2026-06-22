import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SportOffer } from '../../../../data/sports.data';
import { MembershipPlan } from '../../data/membership.models';

@Component({
  selector: 'app-fee-calculator',
  imports: [FormsModule],
  templateUrl: './fee-calculator.html',
  styleUrl: './fee-calculator.css',
})
export class FeeCalculator {
  @Input() membershipPlans: readonly MembershipPlan[] = [];
  @Input() sports: readonly SportOffer[] = [];
  @Input() selectedPlanId = '';
  @Input() selectedSportId = 'all';
  @Input() selectedPlanName = '';
  @Input() selectedSportName: string | null = null;
  @Input() monthlyPriceLabel = '';
  @Input() yearlyPriceLabel = '';

  @Output() planChanged = new EventEmitter<string>();
  @Output() sportChanged = new EventEmitter<string>();

  protected onPlanChanged(planId: string): void {
    this.planChanged.emit(planId);
  }

  protected onSportChanged(sportId: string): void {
    this.sportChanged.emit(sportId);
  }
}
