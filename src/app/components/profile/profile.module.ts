import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    UserPostsComponent,
    PostComponent,
    CommentComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ],
  exports: [
    PostComponent,
    CommentComponent,
    TodoComponent
  ]
})
export class ProfileModule { }
