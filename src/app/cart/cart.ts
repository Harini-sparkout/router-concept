import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [NgIf],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {

  carts = [
    { id: 101, name: 'Mobile' },
    { id: 102, name: 'Laptop' },
    { id: 103, name: 'Watch' }
  ];
  selectedProduct: any;

  constructor(private route: ActivatedRoute) {}
ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id']; 
      this.selectedProduct = this.carts.find((c) => c.id === id);
      console.log('Selected Product:', this.selectedProduct);
    });
  }
}