import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BadInput } from 'src/app/common/bad-input-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/models/Post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(private data: PostsService) {
    data.getAll().subscribe(
      (posts) => (this.posts = posts),
      (error) => {
        throw error;
      }
    );
  }

  addPost(form: FormGroup) {
    const newPost: Post = {
      title: form.value.title,
      userId: 1,
      body: 'Hello',
    };

    form.reset();
    this.posts = [newPost, ...this.posts];

    this.data.create(newPost).subscribe(
      (post: Post) => {
        newPost.id = post.id;
      },
      (error) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) alert('Bad Input');
        else throw error;
      }
    );
  }

  updatePost(post: Post) {
    // Taking a backup of the original title
    const { title: originalTitle } = { ...post };

    const index = this.posts.indexOf(post);
    this.posts[index].title = 'Updated';
    this.data.update(post).subscribe(
      (response) => {},
      (error) => {
        this.posts[index].title = originalTitle;
        alert('Something went wrong !');
      }
    );
  }

  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.data.delete(post.id).subscribe(
      () => {},
      (error) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('The post is already deleted');
        } else throw error;
      }
    );
  }
}
