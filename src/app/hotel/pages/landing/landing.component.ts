import { Component, OnInit } from '@angular/core';
import {IImagesConfig} from "../../../shared/slider/slider.interfaces";
import {ConfigService} from "../../../services/config/config.service";
import {Config} from "./landing.config";
import {ICardCustom} from "../../../shared/slider-card/slider-card.interfaces";
import {config} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [
    `
      ::ng-deep .picsum-img-wrapper  img{
        height: 100%;
        width: 100%;
      }

    `
  ],
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  imagesCustomConfig!: IImagesConfig[];
  constructor(private configService: ConfigService,
              public config: Config) {

  }

  ngOnInit(): void {
     this.componentRender();
  }

   componentRender(event?: any): void{
    const component = this.configService.setComponents(this.config.images);
    this.imagesCustomConfig = component;
  }

}
