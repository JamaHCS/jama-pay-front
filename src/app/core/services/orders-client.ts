import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Order } from '../models/orders/Order.DTO.model';
import { ApiResponse } from '../models/global/Response.model';
import { environment } from '../../../environments/environment';
import { OrderDetails } from '../models/orders/OrderDetails.DTO.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersClient {
  public orders$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  private http = inject(HttpClient);

  onOrders = () => this.orders$.asObservable();

  getById = (id: number): Observable<ApiResponse<OrderDetails>> =>
    this.http.get<ApiResponse<OrderDetails>>(
      environment.apiUrl + 'orders/' + id
    );

  get = (): Observable<ApiResponse<Order[]>> =>
    this.http
      .get<ApiResponse<Order[]>>(environment.apiUrl + 'orders')
      .pipe(tap((res) => this.orders$.next(res.value)));

  pay = (order: Order): Observable<ApiResponse<boolean>> =>
    this.http.put<ApiResponse<boolean>>(
      environment.apiUrl + 'orders/pay/' + order.id,
      {}
    );

  cancel = (order: Order): Observable<ApiResponse<boolean>> =>
    this.http.put<ApiResponse<boolean>>(
      environment.apiUrl + 'orders/cancel/' + order.id,
      {}
    );
}
