import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  username: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUser(this.post.userId).subscribe(user => {
      this.username = user.username;
    });
  }

}
