import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WakeService {
  public up$: Observable<Date>;

  constructor () {
    const beat$: Observable<number> = interval(1000);
    let lastBeat: number = 0;
    this.up$ = new Observable(function subscribe (subscriber) {
      beat$.subscribe(b => {
        console.log(b, lastBeat);
        if (b - lastBeat > 3) {
          subscriber.next(new Date());
          lastBeat = b;
        }
      })
    });
  }
}