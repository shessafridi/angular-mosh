import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FollowersService } from 'src/app/services/followers.service';
import { Follower } from 'src/models/Follower';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent implements OnInit {
  followers: Follower[] = [];
  constructor(private route: ActivatedRoute, private data: FollowersService) {}

  ngOnInit(): void {
    combineLatest([this.route.params, this.route.queryParams])
      .pipe(
        switchMap((params) => {
          const [routeParams, queryParams] = params;
          return this.data.getAll();
        })
      )
      .subscribe((followers) => {
        this.followers = followers;
      });
  }
}
