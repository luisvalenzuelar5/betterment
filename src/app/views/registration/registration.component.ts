import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { User, UserFactory, Skill, SkillFactory } from '../../interfaces/user';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private formBuilder: FormBuilder, private http: HttpService) {
  }

  ngOnInit() {
    this.newUserInfo.categories = SkillFactory();
    this.registrationForm = this.formBuilder.group(this.newUserInfo);
    this.skillsForm = this.formBuilder.group(
      this.newUserInfo.categories.map(
        (skill) => this.formBuilder.group(skill)
      )
    );

    console.log('cats');
    console.log(this.newUserInfo.categories);
    console.log(this.skillsForm);
  }


  onSubmit(formValue): void {
    console.log(formValue);
  }

  getFormControl(group, index, name) {
    return group.get(`${index}.${name}`);
  }
}
