import { Component, OnInit } from '@angular/core';
import { WakeService } from './wake.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  lastAwake: number;

  constructor (
    private wake: WakeService
  ) {}

  ngOnInit () {
    this.wake.timer.subscribe(t => {
      this.lastAwake = t;
    })
  }
}
