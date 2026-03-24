import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './logout.html',
  styleUrls: ['./logout.css']
})
export class Logout {
  confirmed = false;

  logout() {
    // Your logout logic here
    console.log('User logged out!');
    alert('You have been logged out!');
    this.confirmed = false; // reset if neede  
  }

  cancel() {
    console.log('Logout canceled');
    alert('Logout canceled');
    this.confirmed = false;
  }
}