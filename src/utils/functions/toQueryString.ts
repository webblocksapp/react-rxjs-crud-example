export const toQueryString = (object: any) => {
  let queryString = '';

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (value !== undefined) {
      queryString += `${key}=${value}&`;
    }
  });

  return queryString ? `?${queryString.replace(/&$/, '')}` : '';
};
