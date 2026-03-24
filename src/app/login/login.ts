import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Address } from '../address/address';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Address],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

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

    //Read existing users from localStorage safely
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Add new user data
    existingUsers.push(formData);

    //Save back to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('Saved to localStorage:', existingUsers); // verify

    //Navigate to Home page 
    this.router.navigateByUrl('/Home', { state: { user: formData } });

    //Reset the form
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