import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../service/user';
@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [RouterModule,FormsModule,CommonModule],  // important for ActivatedRoute
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  refcode: string = '';
  theme: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    // Subscribe to query params
    this.route.queryParams.subscribe(params => {
      this.refcode = params['ref'] || '';
      this.theme = params['theme'] || '';

      // 🔹 Update global service
      this.userService.setQueryParams(this.refcode, this.theme);
    });

    // Subscribe to global query params (optional)
    this.userService.queryParams$.subscribe(qp => {
      this.refcode = qp.refcode;
      this.theme = qp.theme;
    });
  }
}