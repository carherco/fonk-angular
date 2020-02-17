import { Component, OnInit } from '@angular/core';
import { Validators, createFormValidation } from '@lemoncode/fonk';
import { code } from './code-for-rendering';

@Component({
  selector: 'app-fonk-alone',
  templateUrl: './fonk-alone.component.html',
  styleUrls: ['./fonk-alone.component.css']
})
export class FonkAloneComponent implements OnInit {

  code = code;
  constructor() { }

  ngOnInit(): void {
    const loginRecord = {
      user: '',
      password: '',
    };

    const validationSchema = {
      field: {
        user: [Validators.required],
        password: [Validators.required],
      },
    };

    const formValidation = createFormValidation(validationSchema);

    formValidation
      .validateField('user', loginRecord.user)
      .then(validationResult => {
        console.log(validationResult);
      });


    loginRecord.user = 'John';

    formValidation
      .validateField('user', loginRecord.user)
      .then(validationResult => {
        console.log(validationResult);
      });

    formValidation.validateForm(loginRecord).then(validationResult => {
      console.log(validationResult);
    });
  }

}
