import { CustomerAction, CustomerState } from '../app-types';
import { Customer } from '../interfaces';

const initialState: CustomerState = {
  customers: [],
};

export const useCustomerReducer = () => {
  const add = (customer: Customer, state: CustomerState) => {
    const customers = [...state.customers, customer];
    return { ...state, customers, error: '' };
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

  const remove = (id: number, state: CustomerState) => {
    const customers = [...state.customers].filter((customer) => customer.id !== id);
    return { ...state, customers, error: '' };
  };

  return (state: CustomerState = initialState, action: CustomerAction) => {
    switch (action.type) {
      case 'CUSTOMER:ADD':
        return add(action.customer, state);
      case 'CUSTOMER:UPDATE':
        return update(action.id, action.customer, state);
      case 'CUSTOMER:REMOVE':
        return remove(action.id, state);
      default:
        return state;
    }
  };
};
