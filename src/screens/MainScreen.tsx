import React from 'react';
import { useCustomerRepository } from '../repositories';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import { randomCustomer } from '../utils/functions';

const MainScreen: React.FC = () => {
  const productRepository = useCustomerRepository();

  return (
    <>
      <Grid container spacing={2}>
        {productRepository.customers.map((customer, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Card
              data={customer}
              actions={
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Button color="primary" onClick={() => productRepository.update(customer.id, randomCustomer(['id']))}>
                    Update
                  </Button>
                  <Button color="secondary" onClick={() => productRepository.remove(customer.id)}>
                    Delete
                  </Button>
                </Box>
              }
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={() => productRepository.create(randomCustomer())}>
          Add Customer
        </Button>
      </Box>
    </>
  );
};

export default MainScreen;
