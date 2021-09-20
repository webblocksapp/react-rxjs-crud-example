import React from 'react';
import { useCustomerRepository } from '../repositories';
import CustomerCard from '../components/CustomerCard';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { useObservable } from '../utils/hooks';
import { CustomerState } from '../app-types';

const PreloadedCustomerScreen: React.FC = () => {
  const customerRepository = useCustomerRepository();
  const customerState = useObservable<CustomerState>(customerRepository.getCustomerObservable());

  return (
    <>
      {customerState.updating && <Alert severity="info">A record is being updated</Alert>}
      {customerState.removing && <Alert severity="info">A record is being deleted</Alert>}
      {customerState.error && <Alert severity="error">{customerState.error}</Alert>}

      <br />

      <Grid container spacing={2}>
        {customerState.customers.map((customer: any, index: any) => (
          <Grid key={index} item xs={12} md={4}>
            <CustomerCard customer={customer} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PreloadedCustomerScreen;
