import { Component, Injectable } from '@angular/core';
import { WakeService } from './wake.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor (
    wake: WakeService
  ) {}
}
