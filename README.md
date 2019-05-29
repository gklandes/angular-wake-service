# Angular Wake Service
This service sets up an interval "heartbeat" and watches for abnormal gaps in the the time between "beats". A gap is the best indicator that the system has slept. This would be useful for checking the session status, updating state, etc.

## Properties

### beat$
<Observable>

* uses RXJS Interval
* produces consecutive numbers
* used internally to drive the sleep test

### up$
<Observable>

* produces the current (wake) time when a gap is detected
* only fires on sleep event

### lastSlept
Date | null

* initially null
* after a sleep event, is the last awake time before the sleep event

## Example

```javascript
import { WakeService } from './wake.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

constructor (
  private wake: WakeService
) {}

this.wake.up$.subscribe(d => {
  // do something on wake
});

```
