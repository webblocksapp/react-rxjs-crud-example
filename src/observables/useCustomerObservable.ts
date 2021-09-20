import { BehaviorSubject } from 'rxjs';
import { CustomerState } from '../app-types';
import { CustomerPayload } from '../app-types/CustomerPayload';
import { Customer } from '../interfaces';

const initialState = {
  customers: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

const customerSubject = new BehaviorSubject<CustomerState>(initialState);

export const useCustomerObservable = () => {
  const list = (customers: Customer[]) => {
    setNextState({ customers, error: '' });
  };

  const listing = (flag: boolean) => {
    setNextState({ listing: flag });
  };

  const create = (customer: Customer) => {
    const customers = [...customerSubject.getValue().customers, customer];
    setNextState({ customers, error: '' });
  };

  const creating = (flag: boolean) => {
    setNextState({ creating: flag });
  };

  const update = (id: number, customer: Customer) => {
    let customers = [...customerSubject.getValue().customers];
    customers = customers.map((item) => {
      if (item.id === id) {
        return { ...item, ...customer };
      }

      return item;
    });

    setNextState({ customers, error: '' });
  };

  const updating = (flag: boolean) => {
    setNextState({ updating: flag });
  };

  const remove = (id: number) => {
    const customers = [...customerSubject.getValue().customers].filter((customer) => customer.id !== id);
    setNextState({ customers, error: '' });
  };

  const removing = (flag: boolean) => {
    setNextState({ removing: flag });
  };

  const error = (message: string) => {
    setNextState({ error: message });
  };

  const setNextState = (payload: CustomerPayload) => {
    const state = customerSubject.getValue();
    customerSubject.next({ ...state, ...payload });
  };

  const getObservable = () => {
    return customerSubject;
  };

  return {
    list,
    listing,
    create,
    creating,
    update,
    updating,
    remove,
    removing,
    error,
    getObservable,
  };
};
