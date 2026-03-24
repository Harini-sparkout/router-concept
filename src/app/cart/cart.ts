import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports:[CommonModule],
  templateUrl: './cart.html',
  standalone: true
})
export class Cart{

 product: any;
private route = inject(ActivatedRoute);

ngOnInit() {

  const id = this.route.snapshot.paramMap.get('id');
  const queryParams = this.route.snapshot.queryParamMap;

  this.product = {
    id: id,
    name: queryParams.get('name'),
    price: queryParams.get('price')
  };

  console.log('Final Product:', this.product);
}
}