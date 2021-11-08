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
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
