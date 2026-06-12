import { describe, expect, it } from 'vitest';
import {
  calculateMembershipFee,
  formatMembershipPrice,
  getMembershipPlan,
  sanitizeMembershipPlanId,
} from './membership.service';

describe('membership.service', () => {
  it('berechnet Monats- und Jahresbeitrag fuer einen Mitgliedschaftstyp', () => {
    const summary = calculateMembershipFee('familie');

    expect(summary.plan.name).toBe('Familie');
    expect(summary.monthlyPrice).toBe(55);
    expect(summary.yearlyPrice).toBe(660);
  });

  it('nutzt den Standardtarif bei unbekannten Mitgliedschaftstypen', () => {
    const plan = getMembershipPlan('unbekannt');

    expect(plan.id).toBe('erwachsene');
  });

  it('bereinigt ungueltige Mitgliedschaftstypen', () => {
    expect(sanitizeMembershipPlanId('familie')).toBe('familie');
    expect(sanitizeMembershipPlanId('ungueltig')).toBe('erwachsene');
  });

  it('formatiert Beitraege als deutschen Eurobetrag', () => {
    expect(formatMembershipPrice(24)).toBe('24,00\xa0€');
  });
});
