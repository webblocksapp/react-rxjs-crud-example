import axios, { AxiosResponse } from 'axios';
import { ApiFilter } from '../app-types';
import { Customer } from '../interfaces';
import { toQueryString } from '../utils/functions';

const baseApi = process.env.REACT_APP_BASE_API;

export const useCustomerApi = () => {
  const list = (filters?: ApiFilter): Promise<AxiosResponse<Customer>> => {
    return axios.get(`${baseApi}/customers${toQueryString(filters)}`);
  };

  const create = (customer: Customer): Promise<AxiosResponse<Customer>> => {
    return axios.post(`${baseApi}/customers`, customer);
  };

  const update = (id: number, customer: Customer): Promise<AxiosResponse<Customer>> => {
    return axios.put(`${baseApi}/customers/${id}`, customer);
  };

  const remove = (id: number): Promise<AxiosResponse<Customer>> => {
    return axios.delete(`${baseApi}/customers/${id}`);
  };

  return { list, create, update, remove };
};
