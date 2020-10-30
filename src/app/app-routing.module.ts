import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './assignment/archive/archive.component';
import { FireTodoComponent } from './assignment/fire-todo/fire-todo.component';
import { FollowersComponent } from './assignment/followers/followers.component';
import { LoginComponent } from './assignment/login/login.component';
import { PostsComponent } from './assignment/posts/posts.component';
import { ProfileComponent } from './assignment/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'fire',
    component: FireTodoComponent,
  },
  {
    path: 'followers',
    component: FollowersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'followers/:id/:username',
    component: ProfileComponent,
  },
  {
    path: 'archive/:year/:month',
    component: ArchiveComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
