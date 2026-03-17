import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Address } from '../address/address';
import { UserService } from '../service/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,Address],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm!: FormGroup; // ✅ fix

  constructor(private fb: FormBuilder, private userService: UserService) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      age: [null, [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([
        this.fb.group({
          type: ['Home', Validators.required],
          line: ['', Validators.required]
        })
      ])
    });
  }
login() {
    const user = { name: 'Harini' };
    this.userService.setUser(user);
  }
  get addresses(): FormArray {
    return this.loginForm.get('addresses') as FormArray;
  }
  get addressControls(): FormGroup[] {
  return this.addresses.controls as FormGroup[];
}

  addAddress() {
    this.addresses.push(
      this.fb.group({
        type: ['Home', Validators.required],
        line: ['', Validators.required]
      })
    );
  }

  removeAddress(address: FormGroup) {
    const index = this.addresses.controls.indexOf(address);
    if (index !== -1) {
      this.addresses.removeAt(index);
    }
  }

  submit() {
    if (this.loginForm.valid) {

      const formData = this.loginForm.value;

      // localStorage save
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // ✅ Subject (event)
      this.userService.submitEvent$.next();

      // ✅ BehaviorSubject (state)
      this.userService.setUser(formData);

      console.log('Form Data Saved:', formData);

      this.loginForm.reset();

      this.loginForm.setControl('addresses', this.fb.array([
        this.fb.group({
          type: ['Home', Validators.required],
          line: ['', Validators.required]
        })
      ]));

    } else {
      console.log('Form Invalid!');
      this.loginForm.markAllAsTouched();
    }
  }
}
