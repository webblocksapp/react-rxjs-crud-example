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

const MainScreen: React.FC = () => {
  const customerRepository = useCustomerRepository();

  useEffect(() => {
    customerRepository.list();
  }, []);

  return (
    <>
      {customerRepository.updating && <Alert severity="info">A record is being updated</Alert>}
      {customerRepository.removing && <Alert severity="info">A record is being deleted</Alert>}
      <br />
      {customerRepository.listing ? (
        <Typography variant="body1">Listing...</Typography>
      ) : (
        <Grid container spacing={2}>
          {customerRepository.customers.map((customer: any, index: any) => (
            <Grid key={index} item xs={12} md={4}>
              <CustomerCard customer={customer} />
            </Grid>
          ))}
          {customerRepository.creating && (
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
