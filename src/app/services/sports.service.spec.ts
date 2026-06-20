import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { SportsService, validateSportOffers } from './sports.service';

describe('SportsService', () => {
  it('stellt alle validierten Sportangebote zentral bereit', () => {
    const service = TestBed.inject(SportsService);

    expect(service.getAll().length).toBeGreaterThan(0);
    expect(service.getById('fussball')?.name).toContain('Fu');
  });

  it('liefert undefined fuer fehlende oder unbekannte Sport-IDs', () => {
    const service = TestBed.inject(SportsService);

    expect(service.getById(null)).toBeUndefined();
    expect(service.getById('')).toBeUndefined();
    expect(service.getById('unbekannt')).toBeUndefined();
  });

  it('filtert ungueltige und doppelte Sportdaten aus', () => {
    const result = validateSportOffers([
      {
        id: ' tennis ',
        name: ' Tennis ',
        teaser: ' Training ',
        heroImage: '/Bilder/Tennis.png',
        heroAlt: 'Tennisplatz',
        slideImage: '/Bilder/slideshow/tennis.png',
        slideAlt: 'Tennistraining',
        sections: [
          {
            title: 'Training',
            image: '/Bilder/tennis-training.png',
            imageAlt: 'Training',
            text: 'Gemeinsames Training',
          },
        ],
      },
      {
        id: 'tennis',
        name: 'Tennis doppelt',
        teaser: 'Duplikat',
        heroImage: '/Bilder/Tennis.png',
        heroAlt: 'Tennisplatz',
        slideImage: '/Bilder/slideshow/tennis.png',
        slideAlt: 'Tennistraining',
        sections: [],
      },
      {
        id: '',
        name: 'Ohne ID',
        teaser: 'ungueltig',
        heroImage: '/Bilder/Tennis.png',
        heroAlt: 'Tennisplatz',
        slideImage: '/Bilder/slideshow/tennis.png',
        slideAlt: 'Tennistraining',
        sections: [],
      },
    ]);

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe('tennis');
    expect(result[0]?.name).toBe('Tennis');
  });
});
