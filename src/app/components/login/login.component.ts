import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  loginForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<LoginComponent>,
              private formBuilder: FormBuilder,
              private http: HttpService,
              private cookie: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(this.user);
  }

  login(userInfo) {
    console.log(userInfo);

    this.http.login(userInfo).subscribe((response: any) => {
      console.log(response);
      this.cookie.setKey('user', response.user);
    },
    error => {
      console.log(error);
    });
  }

}
