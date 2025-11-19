import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Order } from '../models/orders/Order.DTO.model';
import { ApiResponse } from '../models/global/Response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersClient {
  public orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  private http = inject(HttpClient);

  onOrders = () => this.orders$.asObservable();

  get = (): Observable<ApiResponse<Order[]>> =>
    this.http
      .get<ApiResponse<Order[]>>(environment.apiUrl + 'orders')
      .pipe(tap((res) => this.orders$.next(res.value)));
}
