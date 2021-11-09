import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SliderComponent } from './slider/slider.component';
import { FormDateComponent } from './form-date/form-date.component';


@NgModule({
  declarations: [
    SliderComponent,
    FormDateComponent
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
  ]
})
export class SharedModule { }
