import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UsersService } from 'src/app/services/users.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() i: number;
  comments: Comment[];
  username: string;

  constructor(private usersService: UsersService, private commentsService: CommentsService) { }

  ngOnInit() {
    this.usersService.getUser(this.post.userId).subscribe(user => {
      this.username = user.username;
    });
    this.getPostComments(this.post.id);
  }

  getPostComments(postId) {
    this.commentsService.getPostComments(postId).subscribe(comments => {
      this.comments = comments;
    });
  }

}
