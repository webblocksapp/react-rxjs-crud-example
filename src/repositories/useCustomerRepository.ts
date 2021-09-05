import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerAction, RootState } from '../app-types';
import { Customer } from '../interfaces';

export const useCustomerRepository = () => {
  const dispatch = useDispatch<Dispatch<CustomerAction>>();
  const customerState = useSelector((state: RootState) => state.customerState);

  const create = (customer: Customer) => {
    dispatch({ type: 'CUSTOMER:ADD', customer });
  };

  const update = (id: number, customer: Customer) => {
    dispatch({ type: 'CUSTOMER:UPDATE', id, customer });
  };

  const remove = (id: number) => {
    dispatch({ type: 'CUSTOMER:REMOVE', id });
  };

  return {
    create,
    update,
    remove,
    ...customerState,
  };
};
