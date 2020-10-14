import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _auth: AuthService) {}

  // Can't access private fields in templetes with AOT so adding a getter
  get auth() {
    return this._auth;
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
  }
  ngOnInit(): void {}
}
