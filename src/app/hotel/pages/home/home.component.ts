import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      header{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
      }
      /*::ng-deep .carousel{*/
      /* height: 370px !important;*/

      /*}*/
    `
  ]
})
export class HomeComponent implements OnInit {
  images = [
    {path: 'assets/img/terraza.jpg'},
    {path: 'assets/img/balcon.jpg'},
    {path: 'assets/img/bar.jpg'},
    {path: 'assets/img/bodas.jpg'},
    {path: 'assets/img/conferencias.jpg'},
    {path: 'assets/img/entrada.jpg'},
    {path: 'assets/img/panoramicaMonte.jpg'},
    {path: 'assets/img/sombrillas.jpg'},
    {path: 'assets/img/restaurante2.jpg'},
    {path: 'assets/img/gimnasio.jpg'},
    {path: 'assets/img/restaurante.jpg'},
    {path: 'assets/img/piscina.jpg'},
    {path: 'assets/img/habitacion2.jpg'},
  ]
  constructor() {
  }

  ngOnInit(): void {

  }
ver(){
  let menu = document.getElementById('menu-principal');

    if (menu!.classList.contains('show'))
      menu!.classList.remove('show');
    else
    document.getElementById('menu-principal')!.classList.add('show');
}

}
