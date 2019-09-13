import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getKey(key) {
    localStorage.getItem(key);
  }

  setKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearUser() {
    localStorage.removeItem('user');
  }
}
