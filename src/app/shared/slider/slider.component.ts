import {Component,  Input,  OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {IImagesConfig} from "./slider.interfaces";
// import {IImagesConfig} from "./slider.interfaces";
// import { title } from 'process';
// import {IImagesConfig} from "./slider.interfaces";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
  ::ng-deep .sr-only{
    display: none;
  }
  `  ],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit{
  @Input() images!: IImagesConfig[];
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit():void{

  }

}
