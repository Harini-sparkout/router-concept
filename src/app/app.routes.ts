import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { NotFound } from './not-found/not-found';
import { ProductDetails } from './products/product-details/product-details';
export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },

  {
    path: 'products/:id',
    component: Products,
    children: [
      {
        path: '',
        component: ProductDetails //child
      }
    ]
  },
  { path: 'cart/:id', component: Cart },
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },

  { path: '**', component: NotFound }
];