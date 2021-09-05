import { useDispatch, useSelector } from 'react-redux';
import { Customer } from '../interfaces';

export const useCustomerRepository = () => {
  const dispatch = useDispatch();
  const customerState = useSelector((state: any) => state.customerState);

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
