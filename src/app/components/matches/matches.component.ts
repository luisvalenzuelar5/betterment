import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: any[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getMatches().subscribe((response: any) => {
      this.matches = response;
      console.log(response)
    }, err => {
      console.log(err);
    });
  }

}
