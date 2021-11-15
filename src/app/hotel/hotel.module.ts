import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import {SharedModule} from "../shared/shared.module";
import {Config} from "./pages/landing/landing.config";
import {IvyCarouselModule} from "angular-responsive-carousel";
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    HabitacionesComponent,
    ContactoComponent,
    BlogComponent,
    NosotrosComponent,
    RestauranteComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule,
    IvyCarouselModule
  ],
  providers: [
    Config
  ]

})
export class HotelModule { }
