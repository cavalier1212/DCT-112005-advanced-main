import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild(NgForm) form: NgForm | undefined;
  @ViewChild('tEmail') email!: NgModel
  @ViewChild('tGroup1') group1!: NgModelGroup

  router = inject(Router)

  ngOnInit(): void {
    // this.email?.valueChanges?.subscribe(value => {
    //   console.log('value: ', value);
    // })
  }

  ngAfterViewInit(): void {
    // template driven form 要在ngAfterViewInit後才有實體
    // 不能用在ngOnInit
    this.email?.valueChanges?.subscribe(value => {
      console.log('value: ', value);
    })
  }

  login(userForm: any){
    // delete userForm.agreement
    console.log('userForm: ', userForm);
    console.log('form: ', this.form);
    console.log('login ....');
    this.router.navigate(['/'])
  }

  loginSubmit(event: any, loginUser: any) {
    console.log('loginUser: ', loginUser);
    console.log('event: ', event);
    console.log('this.form: ', this.form);
    console.log('this.email: ', this.email);
    if(this.form?.invalid) {
      return
    }
    console.log('this.group1.value: ', this.group1.value);
    // this.form?.reset();
    // 可以指定reset欄位
    // resetForm 才能reset submitted status
    this.form?.resetForm({email: 'qwe@222d.sd'})
  }
}
