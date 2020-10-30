import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/models/Post';
import { DataService } from './data.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private items = [];

  getItems() {
    return of(this.items);
  }
  addItem(item) {
    this.items.push(item);
  }
}
