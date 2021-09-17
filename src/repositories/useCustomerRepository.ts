import { useEffect, useState } from 'react';
import { useCustomerApi } from '../apis';
import { CustomerState } from '../app-types';
import { Customer } from '../interfaces';
import { useCustomerObservable } from '../observables';
import { handleAxiosApi, getResponseErrorMessage } from '../utils/functions';

export const useCustomerRepository = () => {
  const customerObservable = useCustomerObservable();
  const customerApi = useCustomerApi();
  const [customerState, setCustomerState] = useState<CustomerState>(customerObservable.getInitialState());

  const list = async () => {
    try {
      customerObservable.listing(true);
      const customers = await handleAxiosApi<Customer[]>(customerApi.list());
      customerObservable.list(customers);
    } catch (error) {
      customerObservable.error(getResponseErrorMessage(error));
    } finally {
      customerObservable.listing(false);
    }
  };

  const create = async (customer: Customer) => {
    try {
      customerObservable.creating(true);
      const createdCustomer = await handleAxiosApi<Customer>(customerApi.create(customer));
      customerObservable.create(createdCustomer);
    } catch (error) {
      customerObservable.error(getResponseErrorMessage(error));
    } finally {
      customerObservable.creating(false);
    }
  };

  const update = async (id: number, customer: Customer) => {
    try {
      customerObservable.updating(true);
      const updatedCustomer = await handleAxiosApi<Customer>(customerApi.update(id, customer));
      customerObservable.update(id, updatedCustomer);
    } catch (error) {
      customerObservable.error(getResponseErrorMessage(error));
    } finally {
      customerObservable.updating(false);
    }
  };

  const remove = async (id: number) => {
    try {
      customerObservable.removing(true);
      await handleAxiosApi(customerApi.remove(id));
      customerObservable.remove(id);
    } catch (error) {
      customerObservable.error(getResponseErrorMessage(error));
    } finally {
      customerObservable.removing(false);
    }
  };

  useEffect(() => {
    customerObservable.subscribe(setCustomerState);
    return () => customerObservable.unsubscribe();
  }, []);

  return {
    list,
    create,
    update,
    remove,
    ...customerState,
  };
};
