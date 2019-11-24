import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userId: number;
  posts: Post[];

  constructor(private parent: ProfileComponent, private postsService: PostsService) { }

  ngOnInit() {
    this.userId = this.parent.pathId;
    this.getUserPosts(this.userId);
  }

  getUserPosts(userId) {
    this.postsService.getUserPosts(userId).subscribe(posts => {
      this.posts = posts;
    });
  }

}
