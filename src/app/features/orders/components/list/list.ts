import { Component, inject, OnInit, signal } from '@angular/core';
import { OrdersClient } from '../../../../core/services/orders-client';
import { Order } from '../../../../core/models/orders/Order.DTO.model';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';
import { Button } from 'primeng/button';
import { DetailsOrderButton } from '../details-order-button/details-order-button';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  imports: [TableModule, CurrencyPipe, Button, DetailsOrderButton],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  public orders = signal<Order[]>([]);

  private ordersClient = inject(OrdersClient);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.ordersClient.get().subscribe();

    this.ordersClient.onOrders().subscribe({
      next: (orders) => this.orders.set(orders),
    });
  }

  confirmPay(event: Event, order: Order) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Pay',
      },
      accept: () =>
        this.ordersClient.pay(order).subscribe({
          next: (res) => {
            if (res.success && res.value) {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Order paid successfully',
              });

              this.ordersClient.get().subscribe();
            } else
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to pay order',
              });
          },
          error: () =>
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to pay order',
            }),
        }),
    });
  }

  confirmCancel(event: Event, order: Order) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Close',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Cancel order',
      },
      accept: () =>
        this.ordersClient.cancel(order).subscribe({
          next: (res) => {
            if (res.success && res.value) {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Order canceled successfully',
              });

              this.ordersClient.get().subscribe();
            } else
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to cancel order',
              });
          },
          error: () =>
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to cancel order',
            }),
        }),
    });
  }
}
