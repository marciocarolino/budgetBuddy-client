import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { apiUrl } from 'src/app/config/config';
import { UsersModel } from 'src/app/models/users/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private apiURL = 'api';

  getAll(): Observable<UsersModel[]> {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im1hcmNpb2Nhcm9saW5vMDFAZ21haWwuY29tIiwiZXhwIjoxNjk4NTE1NjYyfQ.UjOKcezQDKzEaKLj--JRyQTVNFtxQXipkLA97rdViRs';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<UsersModel[]>(`${this.apiURL}/users`, { headers });
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
