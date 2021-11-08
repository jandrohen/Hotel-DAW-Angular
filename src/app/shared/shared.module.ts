import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    SliderComponent,
  ]
})
export class SharedModule { }
