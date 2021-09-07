import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCustomerApi } from '../apis';
import { ApiFilter, CustomerAction, RootState } from '../app-types';
import { Customer } from '../interfaces';
import { getResponseData, getResponseErrorMessage } from '../utils/functions';

export const useCustomerRepository = () => {
  const dispatch = useDispatch<Dispatch<CustomerAction>>();
  const customerState = useSelector((state: RootState) => state.customerState);
  const customerApi = useCustomerApi();

  const find = async (filters: ApiFilter) => {
    try {
      const customers = await getResponseData<Customer[]>(customerApi.find(filters));
      list(customers);
    } catch (error) {
      setError(getResponseErrorMessage(error));
    }
  };

  const list = (customers: Customer[]) => {
    dispatch({ type: 'CUSTOMER:LIST', customers });
  };

  const create = (customer: Customer) => {
    dispatch({ type: 'CUSTOMER:CREATE', customer });
  };

  const update = (id: number, customer: Customer) => {
    dispatch({ type: 'CUSTOMER:UPDATE', id, customer });
  };

  const remove = (id: number) => {
    dispatch({ type: 'CUSTOMER:REMOVE', id });
  };

  const setError = (error: string) => {
    dispatch({ type: 'CUSTOMER:ERROR', error });
  };

  return {
    find,
    create,
    update,
    remove,
    ...customerState,
  };
};
