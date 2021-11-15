import {Component, HostListener, ViewChild, ElementRef, OnInit, Input} from "@angular/core";
import {ICardCustom} from "./slider-card.interfaces";
import {Config} from "./slider-card.config";

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styles: [
  ],
  styleUrls: ['./slider-card.component.css']
})

export class SliderCardComponent implements OnInit{
  cardCustom: ICardCustom[] = [
    {
      icon: 'fas fa-wifi',
      title: 'Free Wifi to stay connected',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    },
    {
      icon: 'fas fa-tv',
      title: '4K Television and Netflix included',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    },
    {
      icon: 'fas fa-spa',
      title: 'Spa zone where you can chill',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    },
    {
      icon: 'fas fa-camera',
      title: 'Spacious rooms for awesome parties',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    },
    {
      icon: 'fas fa-wifi',
      title: 'Free Wifi to stay connected',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    },
  ];
  totalCards: number = this.cardCustom.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage!: number;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  constructor(private config: Config) {
    console.log(this.cardCustom)
    this.cardCustom = this.config.cardCustom;
  }
  ngOnInit() {

    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
    10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
    10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
    (this.currentPage - 1)}px)`;
  }
}
