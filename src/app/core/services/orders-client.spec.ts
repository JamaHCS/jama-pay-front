import { TestBed } from '@angular/core/testing';

import { OrdersClient } from './orders-client';

describe('OrdersClient', () => {
  let service: OrdersClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
