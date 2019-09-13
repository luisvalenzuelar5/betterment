import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getKey(key) {
    return localStorage.getItem(key);
  }

  setKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearUser() {
    localStorage.removeItem('user');
  }

  getUserId() {
    return JSON.parse(this.getKey('user')).id;
  }
}
