import { Component, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { SportsService } from '../../services/sports.service';
import { FeeCalculator } from './components/fee-calculator/fee-calculator';
import { MembershipBenefits } from './components/membership-benefits/membership-benefits';
import { MembershipCta } from './components/membership-cta/membership-cta';
import { MembershipFaq } from './components/membership-faq/membership-faq';
import { MembershipRegistrationForm } from './components/membership-registration-form/membership-registration-form';
import { MembershipTypes } from './components/membership-types/membership-types';
import {
  calculateMembershipFee,
  DEFAULT_MEMBERSHIP_PLAN_ID,
  formatMembershipPrice,
  MEMBERSHIP_PLANS,
  sanitizeMembershipPlanId,
} from './data/membership.service';

@Component({
  selector: 'app-mitgliedschaft-page',
  imports: [
    FeeCalculator,
    MembershipBenefits,
    MembershipCta,
    MembershipFaq,
    MembershipRegistrationForm,
    MembershipTypes,
  ],
  templateUrl: './mitgliedschaft-page.html',
  styleUrl: './mitgliedschaft-page.css',
  encapsulation: ViewEncapsulation.None,
})
export class MitgliedschaftPage {
  private readonly sportsService = inject(SportsService);

  protected readonly membershipPlans = MEMBERSHIP_PLANS;
  protected readonly sports = this.sportsService.getAll();
  protected readonly selectedPlanId = signal(DEFAULT_MEMBERSHIP_PLAN_ID);
  protected readonly selectedSportId = signal('all');
  protected readonly feeSummary = computed(() => calculateMembershipFee(this.selectedPlanId()));
  protected readonly selectedPlan = computed(() => this.feeSummary().plan);
  protected readonly selectedSport = computed(() =>
    this.sports.find((sport) => sport.id === this.selectedSportId()),
  );
  protected readonly monthlyPrice = computed(() => this.feeSummary().monthlyPrice);
  protected readonly yearlyPrice = computed(() => this.feeSummary().yearlyPrice);

  protected onPlanChanged(planId: string): void {
    this.selectedPlanId.set(sanitizeMembershipPlanId(planId));
  }

  protected onSportChanged(sportId: string): void {
    this.selectedSportId.set(sportId);
  }

  protected formatPrice(value: number): string {
    return formatMembershipPrice(value);
  }
}
