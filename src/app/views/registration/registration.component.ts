import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserFactory, Skill, SkillFactory } from '../../interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm;
  skillsForm;
  focusAreas: Skill[];
  displayedColumns = ['focus', 'has_skill', 'needs_skill'];
  newUserInfo = UserFactory();

  constructor(private formBuilder: FormBuilder,
              private http: HttpService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit() {
    this.newUserInfo.categories = SkillFactory();
    this.registrationForm = this.formBuilder.group(this.newUserInfo);
    this.skillsForm = this.formBuilder.group(
      this.newUserInfo.categories.map(
        (skill) => this.formBuilder.group(skill)
      )
    );
  }


  onSubmit(formValue): void {
    const userToSave = formValue;

    userToSave.categories = this.skillsForm.value;
    console.log(userToSave);

    this.http.registerUser(userToSave as User).subscribe((response) => {
      console.log(response);
      this.cookie.setKey('user', userToSave);
      this.router.navigate(['/recommendations']);
    }, err => {
      console.log(err);
    });
  }

  getFormControl(group, index, name) {
    return group.get(`${index}.${name}`);
  }
}
