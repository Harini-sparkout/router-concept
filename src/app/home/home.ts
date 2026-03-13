import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [RouterModule,FormsModule,CommonModule],  // important for ActivatedRoute
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  refcode = '';
  theme = 'black';
    
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {  
    this.route.queryParams.subscribe(params => {
      this.refcode = params['ref'] || '';
      this.theme = params['theme'] || '';
      console.log('updated ref:', this.refcode, 'Theme:', this.theme);
    });
  }
}