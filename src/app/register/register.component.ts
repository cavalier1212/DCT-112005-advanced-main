import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator, forbiddenNameValidator2, passwordValidator } from '../custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ReactiveFormsModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder);

  formSubmitted = false;

  form = this.formBuilder.group({
    firstName: this.formBuilder.control('Mike', [Validators.required, forbiddenNameValidator2(/Mike/)]),
    lastName: this.formBuilder.control('Huang', [Validators.required , forbiddenNameValidator]),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.group({
      password: this.formBuilder.control('', passwordValidator),
      confirmPassword: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    }),
    skills: this.formBuilder.array([
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
      this.formBuilder.control('Javascript'),
      this.formBuilder.control('Angular'),
    ])

  })

  register() {
    // controls 內的 controls
    this.form.controls.skills.controls


    let fieldName = 'firstName';
    this.formSubmitted = true;
    console.log(this.form.value);
    console.log('firstName (form.get)', this.form.get(fieldName)?.value);
    console.log('firstName (form.controls)', this.form.controls.firstName.value);
    this.form.reset({firstName: 'Alix'})
  }
}
