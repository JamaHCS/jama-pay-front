import { Component } from '@angular/core';
import { List } from './components/list/list';
import { CreateOrderButton } from "./components/create-order-button/create-order-button";

@Component({
  selector: 'app-orders',
  imports: [List, CreateOrderButton],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {

}
