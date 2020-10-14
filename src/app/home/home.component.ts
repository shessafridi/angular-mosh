import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 1 },
    { year: 2012, month: 12 },
    { year: 2022, month: 5 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
