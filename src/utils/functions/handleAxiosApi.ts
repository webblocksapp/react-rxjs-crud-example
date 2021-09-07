import { AxiosResponse } from 'axios';

export async function handleAxiosApi<T>(
  axiosPromises: Promise<AxiosResponse<any>> | Promise<AxiosResponse<any>>[]
): Promise<T> {
  axiosPromises = Array.isArray(axiosPromises) ? axiosPromises : [axiosPromises];

  if (axiosPromises.length === 1) {
    const { data } = await axiosPromises[0];
    return data;
  }

  return Promise.all(
    axiosPromises.map(async (promise) => {
      const { data } = await promise;
      return data;
    })
  ) as any;
}
