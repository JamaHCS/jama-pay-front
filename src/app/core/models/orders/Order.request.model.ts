import { PaymentMethod } from "../../../shared/types/PaymentMethod.type";
import { Product } from "./Product.DTO.model ";

export interface OrderRequest {
  products: Product[];
  method: PaymentMethod;
}