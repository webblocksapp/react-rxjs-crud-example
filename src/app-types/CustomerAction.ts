import { Customer } from '../interfaces';

export type CustomerAction =
  | { type: 'CUSTOMER:ADD'; customer: Customer }
  | { type: 'CUSTOMER:UPDATE'; id: number; customer: Customer }
  | { type: 'CUSTOMER:REMOVE'; id: number };
