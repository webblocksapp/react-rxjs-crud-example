import React from 'react';
import { useCustomerRepository } from '../repositories';
import CardSkeleton from '../components/CardSkeleton';
import CustomerCard from '../components/CustomerCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const PreloadedCustomerScreen: React.FC = () => {
  const customerRepository = useCustomerRepository();

  return (
    <>
      {customerRepository.updating && <Alert severity="info">A record is being updated</Alert>}
      {customerRepository.removing && <Alert severity="info">A record is being deleted</Alert>}
      {customerRepository.error && <Alert severity="error">{customerRepository.error}</Alert>}

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
    </>
  );
};

export default PreloadedCustomerScreen;
