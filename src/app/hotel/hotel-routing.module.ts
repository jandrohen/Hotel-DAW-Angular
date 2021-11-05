import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import {HomeComponent} from "./pages/home/home.component";
import { LandingComponent } from './pages/landing/landing.component';
import { ListadoHabitacionesComponent } from './pages/listado-habitaciones/listado-habitaciones.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'landing',
        component:  LandingComponent
      },
      {
        path: 'habitaciones',
        component:  HabitacionesComponent
      },
      {
        path: 'listado-habitaciones',
        component:  ListadoHabitacionesComponent
      },
      {
        path: 'contacto',
        component:  ContactoComponent
      },
      {
        path: 'blog',
        component:  BlogComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
