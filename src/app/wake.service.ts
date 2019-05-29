import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WakeService {
  timer: number = 0;
  lastAwake = (new Date()).getTime();

  constructor() {
    console.log('hello from service');
    const TIMEOUT = 1000;


    if(this.timer === 0) {
      this.timer = setInterval(function() {
        console.log('go');  
        var currentTime = (new Date()).getTime();
        if (currentTime > (this.lastAwake + TIMEOUT + 2000)) {
          console.log('snrt ... waht ? ... I\'m awake!');
        }
        this.lastAwake = currentTime;
      }, TIMEOUT);
    }
  }
}