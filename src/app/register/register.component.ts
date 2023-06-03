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

  form = this.formBuilder.group({
    firstName: 'Alix',
    lastName: 'Dai',
    email: '',
    password: '',
    confirmPassword: ''
  })

  register() {
    console.log(this.form.value);
    console.log('firstName (form.get)', this.form.get('firstName')?.value);
    console.log('firstName (form.controls)', this.form.controls.firstName.value);
  }
}
