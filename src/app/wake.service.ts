import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WakeService {
  timer = interval(1000);
}