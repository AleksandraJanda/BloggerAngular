import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  usersLimit = '?_limit=10';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}${this.usersLimit}`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${userId}`);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }
}
