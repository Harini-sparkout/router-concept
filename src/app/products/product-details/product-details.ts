import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  id!: number;
  reviews = [
    { user: 'Arun', rating: 5, comment: 'Excellent product!' },
    { user: 'Priya', rating: 4, comment: 'Very good, worth the price.' },
    { user: 'Kumar', rating: 3, comment: 'Average performance.' }
  ];
  averageRating = 0;
  ngOnInit() {
    // get product id
    this.id = +this.route.snapshot.paramMap.get('id')!;
     // calculate average rating
    const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
    this.averageRating = +(total / this.reviews.length).toFixed(1);
  }
}