import { Customer } from '../interfaces';

export type CustomerAction =
  | { type: 'CUSTOMER:CREATE'; customer: Customer }
  | { type: 'CUSTOMER:UPDATE'; id: number; customer: Customer }
  | { type: 'CUSTOMER:REMOVE'; id: number };
