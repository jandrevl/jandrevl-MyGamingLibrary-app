import { UserDTO } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl: string = "http://localhost:8000/api/users"

  constructor(
    private http: HttpClient
  ) { }


  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/" + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/username/" + username);
  }

  createUser(userDTO: UserDTO): Observable<Object> {
    return this.http.post(this.baseUrl, userDTO);
  }

  deleteUserByUsername(username: string): Observable<any> {
    return this.http.delete(this.baseUrl +"/username/" + username);
  }



}
