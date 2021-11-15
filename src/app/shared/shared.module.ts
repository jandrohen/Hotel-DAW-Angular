import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SliderComponent } from './slider/slider.component';
import { FormDateComponent } from './form-date/form-date.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import {Config} from "./slider-card/slider-card.config";


@NgModule({
  declarations: [
    SliderComponent,
    FormDateComponent,
    SliderCardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports:[
    SliderComponent,
    FormDateComponent,
    FormsModule,
    NgbModule,
    SliderCardComponent
  ],
  providers:[
    Config
  ]
})
export class SharedModule { }
