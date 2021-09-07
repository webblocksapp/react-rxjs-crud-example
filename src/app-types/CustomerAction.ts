import { Customer } from '../interfaces';
import { ErrorAction } from './ErrorAction';
import { FlagAction } from './FlagAction';

export type CustomerAction =
  | { type: 'CUSTOMER:LIST'; customers: Customer[] }
  | { type: 'CUSTOMER:CREATE'; customer: Customer }
  | { type: 'CUSTOMER:UPDATE'; id: number; customer: Customer }
  | { type: 'CUSTOMER:REMOVE'; id: number }
  | ErrorAction<'CUSTOMER'>
  | FlagAction<'CUSTOMER'>;
