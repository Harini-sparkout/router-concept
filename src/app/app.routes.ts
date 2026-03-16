import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'products/:id', component: Products },
  { path: 'cart/:id', component: Cart },
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },

  { path: '**', component: NotFound }
];