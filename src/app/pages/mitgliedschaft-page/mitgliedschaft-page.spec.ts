import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { MitgliedschaftPage } from './mitgliedschaft-page';

describe('MitgliedschaftPage', () => {
  async function setup(): Promise<ComponentFixture<MitgliedschaftPage>> {
    await TestBed.configureTestingModule({
      imports: [MitgliedschaftPage],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(MitgliedschaftPage);
    fixture.detectChanges();
    return fixture;
  }

  it('zeigt den initialen Beitrag fuer Erwachsene', async () => {
    const fixture = await setup();
    const planSelect = fixture.nativeElement.querySelector('#membership-plan') as HTMLSelectElement;

    expect(planSelect.value).toBe('erwachsene');
    expect(fixture.nativeElement.textContent).toContain('Erwachsene');
    expect(fixture.nativeElement.textContent).toContain('24,00');
    expect(fixture.nativeElement.textContent).toContain('288,00');
  });

  it('berechnet den Familienbeitrag nach Auswahl neu', async () => {
    const fixture = await setup();
    const planSelect = fixture.nativeElement.querySelector('#membership-plan') as HTMLSelectElement;

    planSelect.value = 'familie';
    planSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Familie');
    expect(fixture.nativeElement.textContent).toContain('55,00');
    expect(fixture.nativeElement.textContent).toContain('660,00');
  });

  it('zeigt die ausgewaehlte Sportart im Ergebnis an', async () => {
    const fixture = await setup();
    const sportSelect = fixture.nativeElement.querySelector('#membership-sport') as HTMLSelectElement;

    sportSelect.value = 'handball';
    sportSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Handball');
  });
});
