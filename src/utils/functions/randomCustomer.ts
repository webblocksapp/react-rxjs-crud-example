import faker from 'faker';
import { Customer } from '../../interfaces';

export const randomCustomer = (omitKeys: Array<keyof Customer> = []): Customer => {
  const object: Customer = {
    id: faker.datatype.number(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  };

  omitKeys.forEach((key) => {
    delete object[key];
  });

  return object;
};
