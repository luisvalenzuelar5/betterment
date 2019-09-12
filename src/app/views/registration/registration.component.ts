import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm;
  newUserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    toastMasters: false,
    womenOfRepublic: false,
    role: '',
    location: '',
    photo: '' ,
    badges: []
  } as User;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    console.log(this.newUserInfo);
    this.registrationForm = this.formBuilder.group(this.newUserInfo);
  }


  onSubmit(formValue): void {
    console.log(formValue);
  }
}
