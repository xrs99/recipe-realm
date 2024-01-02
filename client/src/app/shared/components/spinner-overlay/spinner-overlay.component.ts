import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SpinnerOverlayService } from './spinner-overlay.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent implements OnInit {
  waiter?: any;

  showHideButton = false;

  constructor(private service: SpinnerOverlayService, private hostElem: ElementRef, private renderer: Renderer2) {
    // Sets the z-index of the spinner overlay whenever there is a state change in the spinner overlay service
    // If show is true, then it will set the z-index, so it is visible to users.
    this.service.stateChange.subscribe(show => {
      if (this.waiter) {
        clearTimeout(this.waiter);
        this.showHideButton = false;
        this.waiter = undefined;
      }

      this.waiter = setTimeout(() => {
        this.showHideButton = true;
        this.waiter = undefined;
      }, 5000);

      if (show) {
        this.showHideButton = false;
      }
      const zIndex = show ? 1100 : 0;
      this.renderer.setStyle(hostElem.nativeElement, 'z-index', zIndex);
    });
  }

  ngOnInit(): void {}

  forceHide() {
    this.service.hide();
  }
}
