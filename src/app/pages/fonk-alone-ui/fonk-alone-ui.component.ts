import { Component, OnInit } from '@angular/core';
import { Validators, createFormValidation, FormValidationResult, FormValidation } from '@lemoncode/fonk';

@Component({
  selector: 'app-fonk-alone-ui',
  templateUrl: './fonk-alone-ui.component.html',
  styleUrls: ['./fonk-alone-ui.component.css']
})
export class FonkAloneUiComponent implements OnInit {

  formValidationResult: FormValidationResult;
  formValidation: FormValidation;
  loginRecord: {user: string, password: string};

  constructor() { }

  ngOnInit(): void {
    this.loginRecord = {
      user: '',
      password: '',
    };

    const validationSchema = {
      field: {
        user: [Validators.required],
        password: [Validators.required],
      },
    };

    this.formValidation = createFormValidation(validationSchema);

    this.formValidation.validateForm(this.loginRecord).then(validationResult => {
      console.log(validationResult);
      this.formValidationResult = validationResult;
    });
  }

  validateUser(newValue: string) {
    this.loginRecord.user = newValue;
    this.formValidation.validateForm(this.loginRecord).then(validationResult => {
      console.log(validationResult);
      this.formValidationResult = validationResult;
    });
  }

  validatePassword(newValue: string) {
    this.loginRecord.password = newValue;
    this.formValidation.validateForm(this.loginRecord).then(validationResult => {
      console.log(validationResult);
      this.formValidationResult = validationResult;
    });
  }

}
