import { AxiosResponse } from 'axios';

export async function getResponseData<T>(
  axiosResponses: Promise<AxiosResponse<any>> | Promise<AxiosResponse<any>>[]
): Promise<T> {
  axiosResponses = Array.isArray(axiosResponses) ? axiosResponses : [axiosResponses];

  if (axiosResponses.length === 1) {
    const { data } = await axiosResponses[0];
    return data;
  }

  return Promise.all(
    axiosResponses.map(async (promise) => {
      const { data } = await promise;
      return data;
    })
  ) as any;
}
