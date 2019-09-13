import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentRoute;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute)
  }

}
