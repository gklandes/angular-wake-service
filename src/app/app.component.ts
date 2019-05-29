import { Component, OnInit } from '@angular/core';
import { WakeService } from './wake.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  lastInit: Date = new Date();
  lastSleep: Date | null = null;

  constructor (
    private wake: WakeService
  ) {}

  ngOnInit () {
    this.wake.up$.subscribe(d => {
      this.lastSleep = d;
    });
  }
}
