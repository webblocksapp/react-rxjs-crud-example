import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

interface CardProps {
  data: { [key: string]: any };
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ data, actions }) => {
  return (
    <MuiCard variant="outlined">
      <CardContent>
        <List>
          {Object.keys(data).map((key, index) => (
            <ListItem key={index}>
              <Typography gutterBottom variant="body1" component="span">
                - {key}:{' '}
                {typeof data[key] === 'object' ? (
                  <Paper style={{ padding: 10 }} variant="outlined" square>
                    <pre>{JSON.stringify(data[key])}</pre>
                  </Paper>
                ) : (
                  data[key]
                )}
              </Typography>
            </ListItem>
          ))}
        </List>
        {actions}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
