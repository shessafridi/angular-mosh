import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, orderBy: 'newest' },
    });
  }

  ngOnInit(): void {}
}
