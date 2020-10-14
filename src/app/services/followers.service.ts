import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Follower } from 'src/models/Follower';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FollowersService extends DataService<Follower> {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
