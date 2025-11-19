import { OrderStatus } from "../../../shared/types/OrderStatus.type";
import { PaymentMethod } from "../../../shared/types/PaymentMethod.type";
import { Fee } from "./Fee.DTO.model";
import { Product } from "./Product.DTO.model ";
import { Tax } from "./Tax.DTO.model ";

export interface OrderDetails {
  id: number;
  providerOrderId: string;
  providerName: string;
  amount: number;
  status: OrderStatus;
  method: PaymentMethod;
  fees: Fee[];
  taxes: Tax[];
  products: Product[];
  totalFees: number;
  totalTaxes: number;
  totalCharges: number;
  grandTotal: number;
  createdAt: string;
}
