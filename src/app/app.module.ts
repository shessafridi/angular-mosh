import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ZippyComponent } from './assignment/zippy/zippy.component';
import { LikeComponent } from './assignment/like/like.component';
import { PostsComponent } from './assignment/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostsService } from './services/posts.service';
import { FollowersComponent } from './assignment/followers/followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './assignment/profile/profile.component';
import { ArchiveComponent } from './assignment/archive/archive.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { LoginComponent } from './assignment/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FireTodoComponent } from './assignment/fire-todo/fire-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    LikeComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    ArchiveComponent,
    SpinnerComponent,
    LoginComponent,
    FireTodoComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    PostsService,
    FollowersService,
    AuthService,
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
