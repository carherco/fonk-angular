import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/validators/fonk-validators';
import { code } from './code-for-rendering';

@Component({
  selector: 'app-fonk-integrated-validators',
  templateUrl: './fonk-integrated-validators.component.html',
  styleUrls: ['./fonk-integrated-validators.component.css']
})
export class FonkIntegratedValidatorsComponent implements OnInit {

  code = code;
  constructor() {
    const loginRecord = {
      user: '',
      password: '',
    };

    const userForm = new FormGroup({
      user: new FormControl('default_value', [Validators.required({trim: false}), Validators.email()]),
      password: new FormControl('default_value', [Validators.required({trim: true}), Validators.maxLength({length: 20})])
    });

    userForm.get('user').setValue('');
    console.log(userForm.get('user').valid);
    console.log(userForm.get('user').errors);

    loginRecord.user = 'John';

    userForm.get('user').setValue(loginRecord.user);
    console.log(userForm.valid);
    console.log(userForm.get('user').errors);

    userForm.setValue(loginRecord);
    console.log(userForm.valid);
    console.log(userForm.get('user').errors);
    console.log(userForm.get('password').errors);
  }

  ngOnInit(): void {
  }

}
