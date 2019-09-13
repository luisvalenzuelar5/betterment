import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit() {
    // this.http.getCategories().subscribe((data) => {
    //   console.log(data);
    // });
  }

  logout() {
    this.http.logout().subscribe((response) => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

}
