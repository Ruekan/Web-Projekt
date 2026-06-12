export type MembershipPlanId = 'kinder' | 'erwachsene' | 'familie' | 'passiv';

export interface MembershipPlan {
  id: MembershipPlanId;
  name: string;
  description: string;
  monthlyPrice: number;
}

export interface MembershipFeeSummary {
  plan: MembershipPlan;
  monthlyPrice: number;
  yearlyPrice: number;
}
