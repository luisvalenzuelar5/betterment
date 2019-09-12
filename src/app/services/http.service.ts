import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
   }

  getCategories(): any {
    return this.http.get(`${this.api}/categories`);
  }
}
