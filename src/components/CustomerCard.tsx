import React, { useState } from 'react';
import { Customer } from '../interfaces';
import { randomCustomer } from '../utils/functions';
import { useCustomerRepository } from '../repositories';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Loader from './Loader';
import Typography from '@material-ui/core/Typography';

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  const customerRepository = useCustomerRepository();
  const [loading, setLoading] = useState<boolean>(false);

  const update = async (id: number) => {
    setLoading(true);
    await customerRepository.update(id, randomCustomer(['id']));
    setLoading(false);
  };

  const remove = async (id: number) => {
    setLoading(true);
    await customerRepository.remove(id);
    setLoading(false);
  };

  return (
    <Card variant="outlined" style={{ position: 'relative' }}>
      {loading && <Loader />}
      <CardContent>
        <List>
          <ListItem>
            <Typography gutterBottom variant="body1" component="span">
              - Id: {customer.id}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography gutterBottom variant="body1" component="span">
              - Email: {customer.email}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography gutterBottom variant="body1" component="span">
              - Phone: {customer.phone}
            </Typography>
          </ListItem>
        </List>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button color="primary" onClick={() => update(customer.id)}>
            Update
          </Button>
          <Button color="secondary" onClick={() => remove(customer.id)}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(CustomerCard);
