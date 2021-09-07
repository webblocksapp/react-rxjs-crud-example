import { Customer } from '../interfaces';

export type CustomerAction =
  | { type: 'CUSTOMER:LIST'; customers: Customer[] }
  | { type: 'CUSTOMER:CREATE'; customer: Customer }
  | { type: 'CUSTOMER:UPDATE'; id: number; customer: Customer }
  | { type: 'CUSTOMER:REMOVE'; id: number }
  | { type: 'CUSTOMER:ERROR'; error: string };
