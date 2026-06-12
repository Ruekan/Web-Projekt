import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SportOffer } from '../../../../data/sports.data';
import { MembershipPlan } from '../../data/membership.models';

@Component({
  selector: 'app-fee-calculator',
  templateUrl: './fee-calculator.html',
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

  protected onPlanChanged(event: Event): void {
    this.planChanged.emit(readSelectValue(event));
  }

  protected onSportChanged(event: Event): void {
    this.sportChanged.emit(readSelectValue(event));
  }
}

function readSelectValue(event: Event): string {
  return event.target instanceof HTMLSelectElement ? event.target.value : '';
}
