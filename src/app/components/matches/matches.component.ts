import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  userId;
  matches: any[];
  constructor(private http: HttpService,
              private cookie: CookieService) { }

  ngOnInit() {
    this.http.getMatches(this.cookie.getUserId()).subscribe((response: any) => {
      this.matches = response;
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

}
