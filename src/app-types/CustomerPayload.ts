import { Customer } from '../interfaces';
import { ErrorPayload } from './ErrorPayload';
import { FlagPayload } from './FlagPayload';

export type CustomerPayload =
  | { customers: Customer[] }
  | { customer: Customer }
  | { id: number; customer: Customer }
  | { id: number }
  | ErrorPayload
  | FlagPayload;
