import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { PaymentMethod } from '../../../../shared/types/PaymentMethod.type';
import { InputNumber } from 'primeng/inputnumber';
import { OrderRequest } from '../../../../core/models/orders/Order.request.model';
import { OrdersClient } from '../../../../core/services/orders-client';

@Component({
  selector: 'app-create-order-button',
  imports: [
    Button,
    Dialog,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    InputNumber,
  ],
  templateUrl: './create-order-button.html',
  styleUrl: './create-order-button.scss',
})
export class CreateOrderButton {
  public visible: boolean = false;
  public methods: { key: PaymentMethod; value: PaymentMethod }[] = [
    { key: 'Cash', value: 'Cash' },
    { key: 'Card', value: 'Card' },
    { key: 'Transfer', value: 'Transfer' },
  ];

  public form = new FormGroup({
    products: new FormArray<FormGroup>([]),
    method: new FormControl(null, [Validators.required]),
  });

  public orderClient = inject(OrdersClient);

  get products() {
    return this.form.get('products') as FormArray;
  }

  addProduct() {
    const productGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      unitPrice: new FormControl(null, [Validators.required]),
    });
    
    this.products.push(productGroup);
  }

  send = () =>
    this.orderClient
      .create(this.form.value as unknown as OrderRequest)
      .subscribe({
        next: () => {
          this.orderClient.get().subscribe();

          this.visible = false;
        },
      });

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  toggleDialog = () => (this.visible = !this.visible);
}
