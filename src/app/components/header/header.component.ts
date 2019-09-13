import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public http: HttpService,
              private cookie: CookieService) { }

  ngOnInit() {
  }

  logout() {
    this.http.logout().subscribe((response) => {
      console.log(response);
      this.cookie.clearUser();
    }, err => {
      this.cookie.clearUser();
      console.log(err);
    });
  }

}
