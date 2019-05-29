import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WakeService {
  private TIMEOUT: number = 1000;
  public beat$: Observable<number> = interval(this.TIMEOUT);
  public up$: Observable<Date>;
  public lastSlept: Date | null = null;

  constructor () {
    const timeout = this.TIMEOUT;
    const beat$ = this.beat$;
    let lastSlept = this.lastSlept;
    this.up$ = new Observable(function subscribe (subscriber) {
      let lastAwake: Date = new Date();
      beat$.subscribe(() => {
        const now: Date = new Date();
        const diff: number = now.valueOf() - lastAwake.valueOf();
        if (diff > timeout * 2) {
          subscriber.next(now);
        }
        lastAwake = now;
      })
    });
  }
}