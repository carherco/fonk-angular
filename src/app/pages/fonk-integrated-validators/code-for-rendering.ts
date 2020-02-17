export const code = `
const loginRecord = {
  user: '',
  password: '',
};

const userForm = new FormGroup({
  user: new FormControl('initial_value', [Validators.required({trim: false}), Validators.email()]),
  password: new FormControl('initial_value', [Validators.required({trim: true}), Validators.maxLength({length: 20})])
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
`;
