import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiURL = apiUrl;

  authLogin(login: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const httpOptions = { headers: headers };

    return this.http.post(
      `${this.apiURL}auth/login`,
      { login, password },
      httpOptions
    );
  }
}
