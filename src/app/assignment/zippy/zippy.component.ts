import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
})
export class ZippyComponent {
  @Input('zippy-title') title;
  isActive: boolean = false;

  onClick() {
    this.isActive = !this.isActive;
  }
}
