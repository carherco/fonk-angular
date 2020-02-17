export const code = `
const loginRecord = {
  user: '',
  password: '',
};

const userForm = new FormGroup({
  user: new FormControl('default_value', [fonkToAngular(Validators.required, {trim: false}), fonkToAngular(Validators.email)]),
  password: new FormControl('default_value', [fonkToAngular(Validators.required), fonkToAngular(Validators.maxLength, {length: 20})])
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
