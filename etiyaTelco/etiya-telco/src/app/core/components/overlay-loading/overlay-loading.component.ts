import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay-loading/overlay-loading.service';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.css']
})
export class OverlayLoadingComponent {

  spinnerActive: boolean = true;

  constructor(
    public overlayService: OverlayService
  ) {
    this.overlayService.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

}
