import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  userEmail: string;

  constructor(private http: HttpClient, private usersService: UsersService) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentsUrl}`);
  }

  getPostComments(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentsUrl}` + `?postId=` + `${postId}`);
  }

  // getUserComments(userId): Observable<Comment[]> {
  //   this.usersService.getUser(userId).subscribe(user => {
  //     this.userEmail = user.email;
  //   });
  //   return this.http.get<Comment[]>(`${this.commentsUrl}` + `?email=` + `${this.userEmail}`);
  // }
}
