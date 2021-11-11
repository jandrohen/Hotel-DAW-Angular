import { Component, OnInit } from '@angular/core';
import {IImagesConfig} from "../../../shared/slider/slider.interfaces";

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

  images: IImagesConfig[] = [
    { image : '../../assets/img/nocheHotel.jpg',   },
    { image : '../../assets/img/SalonMar.jpg',   },
    { image : '../../assets/img/nocheHotel.jpg',   },
    { image : '../../assets/img/nocheHotel.jpg',   },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }


}
