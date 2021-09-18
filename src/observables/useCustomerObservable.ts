import { useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { CustomerState } from '../app-types';
import { CustomerPayload } from '../app-types/CustomerPayload';
import { Customer } from '../interfaces';
import { useObservable } from '../utils/hooks';

const initialState = {
  customers: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

const stateSubject = new BehaviorSubject<CustomerState>(initialState);

export const useCustomerObservable = () => {
  const [state, setState] = useState<CustomerState>(initialState);
  const { setNextState } = useObservable<CustomerState, CustomerPayload>({
    stateSubject,
    setState,
  });

  const list = (customers: Customer[]) => {
    setNextState({ customers, error: '' });
  };

  const listing = (flag: boolean) => {
    setNextState({ listing: flag });
  };

  const create = (customer: Customer) => {
    const customers = [...stateSubject.getValue().customers, customer];
    setNextState({ customers, error: '' });
  };

  const creating = (flag: boolean) => {
    setNextState({ creating: flag });
  };

  const update = (id: number, customer: Customer) => {
    let customers = [...stateSubject.getValue().customers];
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
    const customers = [...stateSubject.getValue().customers].filter((customer) => customer.id !== id);
    setNextState({ customers, error: '' });
  };

  const removing = (flag: boolean) => {
    setNextState({ removing: flag });
  };

  const error = (message: string) => {
    setNextState({ error: message });
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
    state,
  };
};
