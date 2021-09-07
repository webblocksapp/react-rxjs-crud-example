import axios from 'axios';

export const getResponseErrorMessage = (error: unknown): string => {
  let errorMessage = '';

  if (axios.isAxiosError(error)) {
    errorMessage = error.message;
  }

  return errorMessage;
};
