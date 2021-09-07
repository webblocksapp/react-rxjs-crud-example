import { Customer } from '../interfaces';
import { ErrorState } from './ErrorState';
import { FlagState } from './FlagState';

export type CustomerState = {
  customers: Customer[];
} & FlagState &
  ErrorState;
