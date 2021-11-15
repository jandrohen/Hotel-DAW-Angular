import { Injectable } from '@angular/core';
import {IImagesConfig} from "../../shared/slider/slider.interfaces";
import {ICardCustom} from "../../shared/slider-card/slider-card.interfaces";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  setComponents(imageCustom:IImagesConfig[]){
    const configImages = imageCustom;
    return configImages
  }
}
