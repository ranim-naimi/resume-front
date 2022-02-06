import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./User";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User []> {
    return this.http.get<User []> (`${this.apiServerUrl}/resume/all`)
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/resume/add` , user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/resume/update` , user);
  }

  public deleteEmployee(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/resume/delete/${userId}`);
  }
}
