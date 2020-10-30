import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  archives = [
    { year: 2017, month: 1 },
    { year: 2012, month: 12 },
    { year: 2022, month: 5 },
  ];

  items$;

  constructor(private data: TestService) {
    this.items$ = data.getItems();
  }

  add(item) {
    this.data.addItem(item);
  }
}
