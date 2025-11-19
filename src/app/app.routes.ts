import { Routes } from '@angular/router';
import { Orders } from './features/orders/orders';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    component: Orders
  }
];
