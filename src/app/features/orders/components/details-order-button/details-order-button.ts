import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { OrderDetails } from '../../../../core/models/orders/OrderDetails.DTO.model';
import { OrdersClient } from '../../../../core/services/orders-client';
import { Order } from '../../../../core/models/orders/Order.DTO.model';

@Component({
  selector: 'app-details-order-button',
  imports: [Button, Dialog, JsonPipe],
  templateUrl: './details-order-button.html',
  styleUrl: './details-order-button.scss',
})
export class DetailsOrderButton {
  public visible: boolean = false;
  public order = input.required<Order>();
  public orderDetails?: OrderDetails;

  private orderClient = inject(OrdersClient);
  private cdr = inject(ChangeDetectorRef);

  toggleDialog = () => {
    if (!this.visible)
      this.orderClient.getById(this.order().id).subscribe({
        next: (res) => {
          this.orderDetails = res.value;

          this.cdr.detectChanges();
        },
      });
    else this.orderDetails = undefined;

    this.visible = !this.visible;
  };
}
