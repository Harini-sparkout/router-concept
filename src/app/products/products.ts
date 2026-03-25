import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-products',
  imports:[RouterOutlet],
  templateUrl: './products.html',
  standalone: true
})
export class Products {

  private router = inject(Router);
   product = { id: 1, name: 'Laptop', price: 50000 };
    addToCart() {
    //navigation with route param + query params
    this.router.navigate(['/cart', this.product.id], {
      queryParams: {
        name: this.product.name,
        price: this.product.price
      }
    });
     console.log('Navigating to Cart with product:', this.product);
  }
  goToDetails() {
  this.router.navigate(['/products', this.product.id], {
    queryParams: {
      name: this.product.name,
      price: this.product.price
    }
  });
}
}