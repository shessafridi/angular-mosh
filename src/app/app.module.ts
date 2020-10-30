import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ZippyComponent } from './assignment/zippy/zippy.component';
import { LikeComponent } from './assignment/like/like.component';
import { PostsComponent } from './assignment/posts/posts.component';
import { FollowersComponent } from './assignment/followers/followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './assignment/profile/profile.component';
import { ArchiveComponent } from './assignment/archive/archive.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { LoginComponent } from './assignment/login/login.component';
import { FireTodoComponent } from './assignment/fire-todo/fire-todo.component';
import { FollowersService } from './services/followers.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AppErrorHandler } from './common/app-error-handler';
import { PostsService } from './services/posts.service';
import { environment } from 'src/environments/environment';
import { TestService } from './services/test.service';
import { FireService } from './services/fire.service';
import { MatComponentsModule } from './mat-components.module';

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatComponentsModule,
  ],
  providers: [
    PostsService,
    FollowersService,
    AuthService,
    FireService,
    AuthGuard,
    TestService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
