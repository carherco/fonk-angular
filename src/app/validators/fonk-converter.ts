import { ValidatorFn, AbstractControl } from '@angular/forms';
import { ValidationResult } from '@lemoncode/fonk';

export function fonkToAngular(fonkValidator, customArgs?): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {

    const fieldValidatorArgs = {value: control.value, customArgs };
    const validationResult = fonkValidator.validator(fieldValidatorArgs) as ValidationResult;

    let validationErrorObject = null;
    if (!validationResult.succeeded) {
      validationErrorObject = {
        [validationResult.type]: validationResult
      };
    }

    return validationErrorObject;
  };
}
