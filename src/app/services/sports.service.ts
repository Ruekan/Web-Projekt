import { Injectable } from '@angular/core';
import { SPORT_OFFERS, SportOffer, SportSection } from '../data/sports.data';

@Injectable({ providedIn: 'root' })
export class SportsService {
  private readonly sports = validateSportOffers(SPORT_OFFERS);

  getAll(): readonly SportOffer[] {
    return this.sports;
  }

  getById(id: string | null): SportOffer | undefined {
    if (!isNonEmptyString(id)) {
      return undefined;
    }

    return this.sports.find((sport) => sport.id === id);
  }
}

export function validateSportOffers(values: readonly unknown[]): readonly SportOffer[] {
  const usedIds = new Set<string>();
  const sports: SportOffer[] = [];

  for (const value of values) {
    const sport = parseSportOffer(value);

    if (!sport || usedIds.has(sport.id)) {
      continue;
    }

    usedIds.add(sport.id);
    sports.push(sport);
  }

  return sports;
}

function parseSportOffer(value: unknown): SportOffer | null {
  if (!isRecord(value) || !Array.isArray(value['sections'])) {
    return null;
  }

  const id = parseText(value['id']);
  const name = parseText(value['name']);
  const teaser = parseText(value['teaser']);
  const heroImage = parseText(value['heroImage']);
  const heroAlt = parseText(value['heroAlt']);
  const slideImage = parseText(value['slideImage']);
  const slideAlt = parseText(value['slideAlt']);
  const sections: SportSection[] = [];

  for (const sectionValue of value['sections']) {
    const section = parseSportSection(sectionValue);

    if (!section) {
      return null;
    }

    sections.push(section);
  }

  if (!id || !name || !teaser || !heroImage || !heroAlt || !slideImage || !slideAlt) {
    return null;
  }

  return {
    id,
    name,
    teaser,
    heroImage,
    heroAlt,
    slideImage,
    slideAlt,
    sections,
  };
}

function parseSportSection(value: unknown): SportSection | null {
  if (!isRecord(value)) {
    return null;
  }

  const title = parseText(value['title']);
  const image = parseText(value['image']);
  const imageAlt = parseText(value['imageAlt']);
  const text = parseText(value['text']);

  if (!title || !image || !imageAlt || !text) {
    return null;
  }

  return { title, image, imageAlt, text };
}

function parseText(value: unknown): string | null {
  return isNonEmptyString(value) ? value.trim() : null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
