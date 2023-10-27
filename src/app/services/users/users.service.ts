import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/config';
import { UsersModel } from 'src/app/models/users/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiURL = apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(`${this.apiURL}/users`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/users/register`, data);
  }

  update(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
