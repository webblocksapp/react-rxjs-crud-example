import axios, { AxiosResponse } from 'axios';
import { ApiFilter } from '../app-types';
import { Customer } from '../interfaces';
import { toQueryString } from '../utils/functions';

const baseApi = process.env.REACT_APP_BASE_API;

export const useCustomerApi = () => {
  const find = (filters: ApiFilter): Promise<AxiosResponse<Customer>> => {
    return axios.get(`${baseApi}/customers${toQueryString(filters)}`);
  };

  return { find };
};
