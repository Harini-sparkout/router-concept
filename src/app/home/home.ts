import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  user: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const data = history.state;

    if (data && data.user) {
      this.user = data.user;
      console.log('User:', this.user);
    } else {
      console.log('No user data found');
    }
  }
}