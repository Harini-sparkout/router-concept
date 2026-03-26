import { Component, inject } from '@angular/core';
import {Router,RouterOutlet,NavigationStart,NavigationEnd, NavigationError,RouteConfigLoadStart,RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet],
  templateUrl: './products.html',
  standalone: true
})
export class Products {

  private router = inject(Router);

  product = { id: 1, name: 'Laptop', price: 50000 };

  constructor() {
    //Router Events 
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        console.log('Navigation Started');
      }
      if (event instanceof RouteConfigLoadStart) {
    console.log('Lazy loading child started');  // <-- new
  }

  if (event instanceof RouteConfigLoadEnd) {
    console.log('Lazy loading child completed');  // <-- new
  }

      if (event instanceof NavigationEnd) {
        console.log(' Navigation Completed');
      }

      if (event instanceof NavigationError) {
        console.log('Navigation Failed');
      }

    });
  }

  addToCart() {
    this.router.navigate(['/cart', this.product.id], {
      queryParams: {
        name: this.product.name,
        price: this.product.price
      }
    });
    console.log('Navigating to Cart with product:', this.product);
  }

  goToDetails() {
  this.router.navigate(['/products', this.product.id, 'details'], {
    queryParams: { 
      name: this.product.name, 
      price: this.product.price 
    }
  });
}
}