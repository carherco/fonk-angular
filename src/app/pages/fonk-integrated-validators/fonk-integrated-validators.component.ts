import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/validators/fonk-validators';

@Component({
  selector: 'app-fonk-integrated-validators',
  templateUrl: './fonk-integrated-validators.component.html',
  styleUrls: ['./fonk-integrated-validators.component.css']
})
export class FonkIntegratedValidatorsComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    const loginRecord = {
      user: '',
      password: '',
    };

    this.userForm = new FormGroup({
      user: new FormControl('', [Validators.required({trim: false}), Validators.email()]),
      password: new FormControl('', [Validators.required({trim: true}), Validators.maxLength({length: 20})])
    });

    console.log(this.userForm.valid);
    console.log(this.userForm.get('user').errors);
    console.log(this.userForm.get('password').errors);

    this.userForm.get('user').setValue('Un email no valido@fonk');
    console.log(this.userForm.valid);
    console.log(this.userForm.get('user').errors);

    this.userForm.get('password').setValue('Un password demasiado largo');
    console.log(this.userForm.valid);
    console.log(this.userForm.get('password').errors);

    console.log(this.userForm.errors);
  }

  ngOnInit(): void {
  }

}
