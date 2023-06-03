import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
    firstName: this.formBuilder.control('Mike'),
    lastName: this.formBuilder.control('Huang'),
    email: this.formBuilder.control(''),
    password: this.formBuilder.group({
      password: this.formBuilder.control(''),
      confirmPassword: this.formBuilder.control(''),
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
  }
}
