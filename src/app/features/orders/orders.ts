import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { List } from './components/list/list';

@Component({
  selector: 'app-orders',
  imports: [Button, List],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {

}
