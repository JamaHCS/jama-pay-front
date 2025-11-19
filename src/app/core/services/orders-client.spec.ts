import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { OrdersClient } from './orders-client';

describe('OrdersClient', () => {
  let service: OrdersClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    });
    service = TestBed.inject(OrdersClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
