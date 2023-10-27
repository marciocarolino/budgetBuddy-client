import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type:': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.apiURL}/auth/login`,
      { username, password },

      this.httpOptions
    );
  }
}
