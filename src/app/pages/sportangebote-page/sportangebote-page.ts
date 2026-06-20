import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SportsService } from '../../services/sports.service';

@Component({
  selector: 'app-sportangebote-page',
  imports: [RouterLink],
  templateUrl: './sportangebote-page.html',
  styleUrl: './sportangebote-page.css',
})
export class SportangebotePage implements OnDestroy {
  private readonly sportsService = inject(SportsService);
  private slideTimerId: ReturnType<typeof setInterval> | null = null;

  readonly sports = this.sportsService.getAll();
  readonly isLoading = signal(true);
  readonly activeSlideIndex = signal(0);
  readonly activeSport = computed(() => {
    if (this.sports.length === 0) {
      return undefined;
    }

    return this.sports[this.activeSlideIndex() % this.sports.length] ?? this.sports[0];
  });

  constructor() {
    queueMicrotask(() => this.isLoading.set(false));
    this.startSlideTimer();
  }

  ngOnDestroy(): void {
    this.stopSlideTimer();
  }

  showPreviousSlide(): void {
    this.moveSlide(-1);
    this.restartSlideTimer();
  }

  showNextSlide(): void {
    this.moveSlide(1);
    this.restartSlideTimer();
  }

  showSlide(index: number): void {
    this.activeSlideIndex.set(this.normalizeSlideIndex(index));
    this.restartSlideTimer();
  }

  private moveSlide(offset: number): void {
    this.activeSlideIndex.set(this.normalizeSlideIndex(this.activeSlideIndex() + offset));
  }

  private normalizeSlideIndex(index: number): number {
    if (this.sports.length === 0) {
      return 0;
    }

    return (index + this.sports.length) % this.sports.length;
  }

  private restartSlideTimer(): void {
    this.stopSlideTimer();
    this.startSlideTimer();
  }

  private startSlideTimer(): void {
    if (this.sports.length < 2) {
      return;
    }

    this.slideTimerId = setInterval(() => this.moveSlide(1), 7000);
  }

  private stopSlideTimer(): void {
    if (!this.slideTimerId) {
      return;
    }

    clearInterval(this.slideTimerId);
    this.slideTimerId = null;
  }
}
