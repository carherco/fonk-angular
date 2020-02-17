import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/validators/fonk-validators';

@Component({
  selector: 'app-fonk-integrated-validators-ui',
  templateUrl: './fonk-integrated-validators-ui.component.html',
  styleUrls: ['./fonk-integrated-validators-ui.component.css']
})
export class FonkIntegratedValidatorsUiComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    const loginRecord = {
      user: '',
      password: '',
    };

    this.userForm = new FormGroup({
      user: new FormControl('default_value', [Validators.required({trim: false}), Validators.email()]),
      password: new FormControl('default_value', [Validators.required({trim: true}), Validators.maxLength({length: 20})])
    });

    this.userForm.get('user').setValue('');
    console.log(this.userForm.get('user').valid);
    console.log(this.userForm.get('user').errors);

    loginRecord.user = 'John';

    this.userForm.get('user').setValue(loginRecord.user);
    console.log(this.userForm.valid);
    console.log(this.userForm.get('user').errors);

    this.userForm.setValue(loginRecord);
    console.log(this.userForm.valid);
    console.log(this.userForm.get('user').errors);
    console.log(this.userForm.get('password').errors);
  }

  ngOnInit(): void {
  }

}
