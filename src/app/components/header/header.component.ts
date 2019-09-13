import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public http: HttpService,
              private cookie: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.http.logout().subscribe((response) => {
      this.cookie.clearUser();
      this.navigateHome();
    }, err => {
      this.cookie.clearUser();
      this.navigateHome();
    });
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
