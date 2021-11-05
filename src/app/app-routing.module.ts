import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'hotel',
    loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule)
  },
  {
    path: '**',
    redirectTo: 'hotel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
