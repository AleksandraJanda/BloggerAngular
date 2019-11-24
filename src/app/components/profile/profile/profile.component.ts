import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = new User();
  pathId = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.getUser(this.pathId);
  }

  getUser(userId: number) {
    return this.usersService.getUser(userId).subscribe(user => {
      this.user = user;
    });
  }

}
