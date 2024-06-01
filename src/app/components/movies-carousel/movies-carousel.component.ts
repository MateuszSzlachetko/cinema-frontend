import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  input,
  InputSignal,
  ViewChild
} from '@angular/core';
import {EmblaCarouselDirective, EmblaCarouselType, EmblaEventType, EmblaOptionsType} from "embla-carousel-angular";
import {ScreeningCardComponent} from "../screening-card/screening-card.component";
import {MovieInterface} from "../../core/interfaces/movie.interface";
import {ScreeningInterface} from "../../core/interfaces/screening.interface";

@Component({
  selector: 'app-movies-carousel',
  standalone: true,
  imports: [
    EmblaCarouselDirective,
    ScreeningCardComponent
  ],
  templateUrl: './movies-carousel.component.html',
  styleUrl: './movies-carousel.component.scss'
})
export class MoviesCarouselComponent implements AfterViewInit {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective
  options: EmblaOptionsType = {loop: false};
  moviesWithScreenings: InputSignal<Map<MovieInterface, ScreeningInterface[]>> = input.required<Map<MovieInterface, ScreeningInterface[]>>();
  emblaApi?: EmblaCarouselType;
  changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef)
  canScrollPrev: boolean = false;
  canScrollNext: boolean = false;
  public readonly subscribeToEvents: EmblaEventType[] = [
    'init',
    'slidesChanged',
    'slidesInView',
    'reInit',
  ]

  constructor() {
    effect(() => {
      if (this.moviesWithScreenings().size > 1) {
        if (!this.canScrollPrev) {
          this.canScrollNext = true;
        }
      }
    });
  }

  ngAfterViewInit() {
    this.emblaApi = this.emblaRef.emblaApi
  }

  scrollPrev() {
    this.emblaApi?.scrollPrev();
    this.updateCanScroll()
  }

  scrollNext() {
    this.emblaApi?.scrollNext();
    this.updateCanScroll()
  }

  updateCanScroll() {
    this.canScrollPrev = this.emblaApi?.canScrollPrev() || false
    this.canScrollNext = this.emblaApi?.canScrollNext() || false
  }

  onEmblaChange($event: EmblaEventType) {
    this.updateCanScroll()
  }
}
