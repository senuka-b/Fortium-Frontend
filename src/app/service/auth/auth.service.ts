import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../model/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = "http://localhost:8080/api/auth"

  constructor(private http: HttpClient) { }


  login(username: string, password: string) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, {
      username,
      password
    })
  }

  signup(username: string, password: string, fullName: string) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseURL}/signup`, {
      username,
      password,
      fullName
    });
  }

  saveToLocalStorage(token: string) {
    localStorage.setItem("auth-token", token);
  }

  getToken() {
    console.log(localStorage.getItem("auth-token"));
    
    return localStorage.getItem("auth-token");
  }

  logout() {
    localStorage.removeItem("auth-token");
  }
}
