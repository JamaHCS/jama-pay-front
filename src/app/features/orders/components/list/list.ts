import { Component, inject, OnInit, signal } from '@angular/core';
import { OrdersClient } from '../../../../core/services/orders-client';
import { Order } from '../../../../core/models/orders/Order.DTO.model';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-list',
  imports: [TableModule, CurrencyPipe, Button],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  public orders = signal<Order[]>([]);

  private ordersClient = inject(OrdersClient);

  ngOnInit(): void {
    this.ordersClient.get().subscribe();

    this.ordersClient.onOrders().subscribe({
      next: (orders) => this.orders.set(orders),
    });
  }
}
