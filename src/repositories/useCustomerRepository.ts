import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCustomerApi } from '../apis';
import { CustomerAction, RootState } from '../app-types';
import { Customer } from '../interfaces';
import { handleAxiosApi, getResponseErrorMessage } from '../utils/functions';

export const useCustomerRepository = () => {
  const dispatch = useDispatch<Dispatch<CustomerAction>>();
  const customerState = useSelector((state: RootState) => state.customerState);
  const customerApi = useCustomerApi();

  const list = async () => {
    try {
      dispatch({ type: 'CUSTOMER:LISTING', flag: true });
      const customers = await handleAxiosApi<Customer[]>(customerApi.list());
      dispatch({ type: 'CUSTOMER:LIST', customers });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:ERROR_ON_LIST', message: getResponseErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:LISTING', flag: false });
    }
  };

  const create = async (customer: Customer) => {
    try {
      dispatch({ type: 'CUSTOMER:CREATING', flag: true });
      const createdCustomer = await handleAxiosApi<Customer>(customerApi.create(customer));
      dispatch({ type: 'CUSTOMER:CREATE', customer: createdCustomer });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:ERROR_ON_CREATE', message: getResponseErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:CREATING', flag: false });
    }
  };

  const update = async (id: number, customer: Customer) => {
    try {
      dispatch({ type: 'CUSTOMER:UPDATING', flag: true });
      const updatedCustomer = await handleAxiosApi<Customer>(customerApi.update(id, customer));
      dispatch({ type: 'CUSTOMER:UPDATE', id, customer: updatedCustomer });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:ERROR_ON_UPDATE', message: getResponseErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:UPDATING', flag: false });
    }
  };

  const remove = async (id: number) => {
    try {
      dispatch({ type: 'CUSTOMER:REMOVING', flag: true });
      await handleAxiosApi(customerApi.remove(id));
      dispatch({ type: 'CUSTOMER:REMOVE', id });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:ERROR_ON_REMOVE', message: getResponseErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:REMOVING', flag: false });
    }
  };

  return {
    list,
    create,
    update,
    remove,
    ...customerState,
  };
};
