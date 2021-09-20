import React, { useEffect } from 'react';
import { randomCustomer } from '../utils/functions';
import { useCustomerRepository } from '../repositories';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardSkeleton from '../components/CardSkeleton';
import CustomerCard from '../components/CustomerCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { useObservable } from '../utils/hooks';
import { Customer } from '../interfaces';

const MainScreen: React.FC = () => {
  const customerRepository = useCustomerRepository();
  const customerState = useObservable(customerRepository.getCustomerObservable());

  useEffect(() => {
    customerRepository.list();
  }, []);

  return (
    <>
      {customerState.updating && <Alert severity="info">A record is being updated</Alert>}
      {customerState.removing && <Alert severity="info">A record is being deleted</Alert>}
      {customerState.error && <Alert severity="error">{customerState.error}</Alert>}

      <br />
      {customerState.listing ? (
        <Typography variant="body1">Listing...</Typography>
      ) : (
        <Grid container spacing={2}>
          {customerState.customers.map((customer: Customer) => (
            <Grid key={customer.id} item xs={12} md={4}>
              <CustomerCard customer={customer} />
            </Grid>
          ))}
          {customerState.creating && (
            <Grid item xs={12} md={4}>
              <CardSkeleton />
            </Grid>
          )}
        </Grid>
      )}

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={() => customerRepository.create(randomCustomer())}>
          Add Customer
        </Button>
      </Box>
    </>
  );
};

export default MainScreen;
