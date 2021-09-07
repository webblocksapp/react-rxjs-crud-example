import { CustomerAction, CustomerState } from '../app-types';
import { Customer } from '../interfaces';

const initialState: CustomerState = {
  customers: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

export const useCustomerReducer = () => {
  const list = (customers: Customer[], state: CustomerState) => {
    return { ...state, customers, error: '' };
  };

  const listing = (flag: boolean, state: CustomerState) => {
    return { ...state, listing: flag };
  };

  const create = (customer: Customer, state: CustomerState) => {
    const customers = [...state.customers, customer];
    return { ...state, customers, error: '' };
  };

  const creating = (flag: boolean, state: CustomerState) => {
    return { ...state, creating: flag };
  };

  const update = (id: number, customer: Customer, state: CustomerState) => {
    let customers = [...state.customers];
    customers = customers.map((item) => {
      if (item.id === id) {
        return { ...item, ...customer };
      }

      return item;
    });

    return { ...state, customers, error: '' };
  };

  const updating = (flag: boolean, state: CustomerState) => {
    return { ...state, updating: flag };
  };

  const remove = (id: number, state: CustomerState) => {
    const customers = [...state.customers].filter((customer) => customer.id !== id);
    return { ...state, customers, error: '' };
  };

  const removing = (flag: boolean, state: CustomerState) => {
    return { ...state, removing: flag };
  };

  const error = (message: string, state: CustomerState) => {
    return { ...state, error: message };
  };

  return (state: CustomerState = initialState, action: CustomerAction) => {
    switch (action.type) {
      case 'CUSTOMER:LIST':
        return list(action.customers, state);
      case 'CUSTOMER:LISTING':
        return listing(action.flag, state);
      case 'CUSTOMER:ERROR_ON_LIST':
        return error(action.message, state);
      case 'CUSTOMER:CREATE':
        return create(action.customer, state);
      case 'CUSTOMER:CREATING':
        return creating(action.flag, state);
      case 'CUSTOMER:UPDATE':
        return update(action.id, action.customer, state);
      case 'CUSTOMER:UPDATING':
        return updating(action.flag, state);
      case 'CUSTOMER:ERROR_ON_UPDATE':
        return error(action.message, state);
      case 'CUSTOMER:REMOVE':
        return remove(action.id, state);
      case 'CUSTOMER:REMOVING':
        return removing(action.flag, state);
      case 'CUSTOMER:ERROR_ON_REMOVE':
        return error(action.message, state);
      default:
        return state;
    }
  };
};
