import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/models/Post';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataService<Post> {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
