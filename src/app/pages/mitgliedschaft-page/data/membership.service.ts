import { MembershipFeeSummary, MembershipPlan, MembershipPlanId } from './membership.models';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'kinder',
    name: 'Kinder & Jugend',
    description: 'bis 18 Jahre',
    monthlyPrice: 12,
  },
  {
    id: 'erwachsene',
    name: 'Erwachsene',
    description: 'ab 18 Jahre',
    monthlyPrice: 24,
  },
  {
    id: 'familie',
    name: 'Familie',
    description: '2 Erwachsene + Kinder',
    monthlyPrice: 55,
  },
  {
    id: 'passiv',
    name: 'Fördermitglied',
    description: 'Unterstützer ohne aktive Teilnahme',
    monthlyPrice: 5,
  },
];

export const DEFAULT_MEMBERSHIP_PLAN_ID: MembershipPlanId = 'erwachsene';

export function sanitizeMembershipPlanId(planId: string): MembershipPlanId {
  return isMembershipPlanId(planId) ? planId : DEFAULT_MEMBERSHIP_PLAN_ID;
}

export function getMembershipPlan(planId: string): MembershipPlan {
  const safePlanId = sanitizeMembershipPlanId(planId);
  const plan =
    MEMBERSHIP_PLANS.find((candidate) => candidate.id === safePlanId) ??
    MEMBERSHIP_PLANS.find((candidate) => candidate.id === DEFAULT_MEMBERSHIP_PLAN_ID);

  if (!plan) {
    throw new Error('Keine Mitgliedschaftsbeitraege hinterlegt.');
  }

  return plan;
}

export function calculateMembershipFee(planId: string): MembershipFeeSummary {
  const plan = getMembershipPlan(planId);

  return {
    plan,
    monthlyPrice: plan.monthlyPrice,
    yearlyPrice: plan.monthlyPrice * 12,
  };
}

export function formatMembershipPrice(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value);
}

function isMembershipPlanId(value: string): value is MembershipPlanId {
  return MEMBERSHIP_PLANS.some((plan) => plan.id === value);
}
