import { Validators, AbstractControl } from "@angular/forms";

// const passwordValidator = [Validators.required, Validators.minLength(6)];
export const passwordValidator = Validators.compose([Validators.required, Validators.minLength(6)]);


// 一般傳入control驗證
export function forbiddenNameValidator(control: AbstractControl) {
  const nameRe = /Will/;
  const name = control.value;
  const no = nameRe.test(name);
  return no ? { 'forbiddenName': true } : null;
};

// 自訂傳入驗證方法
export function forbiddenNameValidator2(nameRe: RegExp) {
  return (control: AbstractControl) => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? { 'forbiddenName': true } : null;
  }
}

export function confirmPasswordValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { 'confirmPassword': true };
}
