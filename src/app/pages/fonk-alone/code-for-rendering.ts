export const code = `
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
`;
