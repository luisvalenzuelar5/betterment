import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

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
              private http: HttpService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(this.user);
  }

  login(userInfo) {
    console.log(userInfo);

    this.http.login(userInfo).subscribe((response) => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

}
