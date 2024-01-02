import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  state = false;

  stateChange = new BehaviorSubject(this.state);

  constructor() {}

  emit() {
    this.stateChange.next(this.state);
  }

  show() {
    this.state = true;
    this.emit();
  }

  hide() {
    this.state = false;
    this.emit();
  }
}
