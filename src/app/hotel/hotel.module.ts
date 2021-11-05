import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { ListadoHabitacionesComponent } from './pages/listado-habitaciones/listado-habitaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    HabitacionesComponent,
    ListadoHabitacionesComponent,
    ContactoComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
