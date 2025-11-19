export interface ApiResponse<T> {
  value: T;
  success: boolean;
  errors: unknown;
  status: number;
}
