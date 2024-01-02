import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest);
  }

  hello(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(BASE_URL + 'api/hello', {headers});
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      console.log("JWT token found in the Local Storage");
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
      return new HttpHeaders();
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

}
