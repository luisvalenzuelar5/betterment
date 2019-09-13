import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
   }

  getSkills(): any {
    return this.http.get(`${this.api}/categories`);
  }

  registerUser(data: User) {
    return this.http.post(`${this.api}/users`, data, {});
  }

  login(data) {
    return this.http.post(`${this.api}/login`, data, {});
  }

  logout() {
    return this.http.post(`${this.api}/logout`, {}, {});
  }
}