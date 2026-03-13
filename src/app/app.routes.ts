import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: '', component : Home},
    {path:'products/:new value', component: Products},
    {path:'login',component:Login},
    {path:'Logout',component:Logout},
   { path: 'cart/:id', component: Cart },
    // { path: '**', component: Home }

];
