import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent {
  @Input('') likesCount = 10;
  @Input('liked') isSelected = false;

  onClick() {
    this.likesCount += this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
  }
}
